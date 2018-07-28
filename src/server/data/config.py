import json
import os


class ConfigError(Exception):
    pass


class Config(dict):
    def __str__(self):
        return str(self.config)

    def __init__(self):
        dict.__init__(self, dict())  # Because dict is extended

        # Open <user>/.yojaka/config.json
        user_home = os.path.expanduser("~")
        config_dir = os.path.join(user_home, ".yojaka")
        self.config_file = os.path.join(config_dir, "config.json")

        if not os.path.exists(config_dir):
            os.mkdir(config_dir)

        # initialize self.config from config.json
        with open(self.config_file, "r+") as f:
            conf = f.read()
            if conf != "":
                try:
                    self.config = json.loads(conf)
                except json.decoder.JSONDecodeError as e:
                    raise ConfigError("Config file invalid format")
            else:
                self.config = dict()

    def __enter__(self):
        """ to enable 'with **' capability, counterpart function is __exit__ """
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        """ commit at the end of 'with **' block """
        self.commit()

    def __getitem__(self, key):
        # return super().__getitem__(key)
        try:
            return self.config[key]
        except KeyError as e:
            self.__setitem__(key, dict())  # initialize the non-existent keys
            return self.config[key]

    def __setitem__(self, key, value):
        # super().__setitem__(key, value)
        self.config[key] = value

    def commit(self):
        """
        Commit the configuration changes to file
        Use "with Config() as config" if auto commit is needed at the end,
        otherwise use this method.
        """
        with open(self.config_file, "w+") as f:
            json.dump(self.config, f, indent=4)


if __name__ == "__main__":
    with Config() as config:
        print(config)
        config["server"] = "http://127.0.0.1:5000"
        config["database"] = {
            "type": "mysql",
            "user": "dbuser",
            "host": "localhost",
            "password": "secret-pass"
        }

        # config.commit()
