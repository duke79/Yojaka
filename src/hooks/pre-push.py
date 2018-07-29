#!/usr/bin/env python
import os
import sys

path_this_file_dir = os.path.dirname(os.path.realpath(__file__))
path_project_root = os.path.dirname(os.path.dirname(path_this_file_dir))
path_run_server_tests = os.path.join(path_project_root, "RunServerTests.bat")

ret = os.system(path_run_server_tests)

if ret != 0:
    print("\n\n\n Some of the test cases did not succeed !")

sys.exit(ret)  # 1 for error
