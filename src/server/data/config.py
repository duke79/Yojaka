import json
import os


class ConfigError(Exception):
    pass


class Config(dict):
    def __init__(self, **kwargs):
        dict.__init__(self, **kwargs)

        user_home = os.path.expanduser("~")
        config_dir = os.path.join(user_home, ".yojaka")
        self.config_file = os.path.join(config_dir, "config.json")

        if not os.path.exists(config_dir):
            os.mkdir(config_dir)

        with open(self.config_file, "r+") as f:
            conf = f.read()
            if conf != "":
                try:
                    self.config = json.loads(conf)
                except json.decoder.JSONDecodeError as e:
                    raise ConfigError("Config file corrupted")
            else:
                self.config = dict()

    def __str__(self):
        return str(self.config)

    def __getitem__(self, key):
        # return super().__getitem__(key)
        try:
            return self.config[key]
        except KeyError as e:
            self.__setitem__(key, dict())
            return self.config[key]

    def __setitem__(self, key, value):
        # super().__setitem__(key, value)
        self.config[key] = value

    def commit(self):
        ''' Commit the configuration changes to file '''
        with open(self.config_file, "w+") as f:
            json.dump(self.config, f, indent=4)


if __name__ == "__main__":
    config = Config()
    print(config)
    config["server"] = "http://127.0.0.1:5000"
    database = {"type": "mysql"}
    config["database"]["type"] = dict()
    config["database"]["type"]["sdf"] = "mysqls"
    config.commit()
