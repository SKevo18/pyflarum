from typing import Literal, NoReturn


from typing import Union, List, Dict


class FlarumError(Exception):
    pass


def handle_errors(errors: List[Dict[str, str]]) -> Union[Literal[False], NoReturn]:
    if not isinstance(errors, list):
        return None

    for error in errors:
        if not isinstance(error, dict):
            return None

        status = error.get('status', None)
        if status == "400":
            raise FlarumError('Error 400: CSRF token mismatch. This usually happens when performing a login only operation when unauthenticated. Are you authenticated?')

        if status == "404":
            raise FlarumError('Error 404: Requested resource was not found.')

        elif status == "405":
            raise FlarumError('Error 405: Method not allowed.')
        
        elif status == "500":
            raise FlarumError('Error 500: Unknown internal server error occurred.')

        else:
            return False
