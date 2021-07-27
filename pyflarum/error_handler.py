from typing import Optional, List, Dict, TYPE_CHECKING
if TYPE_CHECKING:
    from requests.models import Response

from json.decoder import JSONDecodeError


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


def parse_request(request: 'Response'):
    try:
        # Includes opening and closing brackets:
        if len(request.text) >= 2:
            json = request.json() # type: dict

        else:
            json = {}

    except JSONDecodeError as e:
        json = {'errors': [{'code': 0, 'detail': e}]}


    if 'errors' in json:
        return handle_errors(json['errors'])

    elif not 200 <= request.status_code <= 204:
        return handle_errors(status_code=request.status_code)


    return json


def handle_errors(errors: Optional[List[Dict[str, str]]]=None, status_code: Optional[str]=None):
    """
        Handles Flarum & request related errors. Should be called on error only.
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
        raise FlarumError(f'Request related error: {status_code}')
