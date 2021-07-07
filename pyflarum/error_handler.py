from typing import NoReturn


from typing import Union, List, Dict


class FlarumError(Exception):
    pass


def handle_errors(errors: List[Dict[str, str]]) -> Union[None, NoReturn]:
    if not isinstance(errors, list):
        return None

    for error in errors:
        if not isinstance(error, dict):
            return None

        status = error.get('status', None)
        if status == "404":
            raise FlarumError('Error 404: Requested resource was not found.')

        elif status == "405":
            raise FlarumError('Error 405: Method not allowed.')

        else:
            return None
