from typing import Literal, NoReturn, Optional, TYPE_CHECKING
if TYPE_CHECKING:
    from requests.models import Response

from json.decoder import JSONDecodeError


__all__ = ['FlarumError', 'MissingExtensionError', 'MissingExtensionWarning', 'parse_request', 'handle_errors']



class FlarumError(Exception):
    """
        Generic class for all Flarum related errors.
    """

    def __init__(self, message: Optional[str]=None, status: Optional[int]=None, code: Optional[str]=None, details: Optional[str]=None):
        self.status = status
        self.code = code
        self.details = details

        return super().__init__(message)


class MissingExtensionError(Exception):
    """Missing pyFlarum extension error."""
    pass


class MissingExtensionWarning(Warning):
    """Missing pyFlarum extension warning."""
    pass



def parse_request(response: 'Response') -> 'dict | NoReturn | Literal[True]':
    """
        Parses the request as JSON, raises `FlarumError` if
        something went wrong.
    """

    if not 200 <= response.status_code <= 204:
        return handle_errors(status_code=response.status_code)

    try:
        # Includes opening and closing brackets:
        if len(response.text) >= 2:
            json = response.json() # type: dict

        else:
            json = {}

    except JSONDecodeError as e:
        json = {'errors': [{'code': 0, 'detail': e}]}


    if 'errors' in json:
        return handle_errors(errors=json['errors'])


    return json


def handle_errors(errors: Optional[list[dict[str, str]]]=None, status_code: Optional[str]=None) -> 'Literal[True] | NoReturn':
    """
        Handles Flarum & request related errors.
        Returns `FlarumError` if an error was found, `True` otherwise.
    """

    if errors:
        for error in errors:
            if status_code:
                status = status_code

            else:
                s = error.get('status', None)

                if s:
                    status = int(s)

                else:
                    status = 'Unknown'

            code = error.get('code', 0)
            details = error.get("detail", "No further details.")


            if status == 400:
                if code == 'invalid_parameter':
                    raise FlarumError(f'Error {status}: Invalid parameter. This usually happens when you provide an invalid filter when filtering data. {details}', status=status, code=code, details=details)

                else:
                    raise FlarumError(f'Error {status}: {code} - {details}', status=status, code=code, details=details)


            if status == 401:
                if code == 'not_authenticated':
                    raise FlarumError(f'Error {status}: Not authenticated. Please, check whether your authentication details (username & password) are correct and try again. {details}', status=status, code=code, details=details)

                else:
                    raise FlarumError(f'Error {status}: {code} - {details}', status=status, code=code, details=details)

            else:
                raise FlarumError(f'Error {status}: {code} - {details}', status=status, code=code, details=details)

    else:
        raise FlarumError(f'Request related error: {status_code} (https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/{status_code})')

    return True
