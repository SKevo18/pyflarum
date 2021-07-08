from pathlib import Path
import sys

def normalize_path():
    ROOT_PATH = Path(__file__).parent.parent.absolute()
    sys.path.append(str(ROOT_PATH))

