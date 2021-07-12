from pathlib import Path
import sys


ROOT_PATH = Path(__file__).parent.parent.absolute()


def normalize_path():
    sys.path.append(str(ROOT_PATH))

