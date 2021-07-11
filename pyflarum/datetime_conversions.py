from typing import Optional, Union

from datetime import datetime


def flarum_to_datetime(flarum_dt: Optional[Union[str, datetime]]=None):
    """
        Converts Flarum's datetime string to Python's datetime object.
        Doesn't convert if the parameter is already a datetime object.
        
        Flarum's datetime format is `%Y-%m-%dT%H:%M:%S%z`
    """

    if not flarum_dt:
        return None

    elif isinstance(flarum_dt, datetime):
        return flarum_dt

    else:
        strpped = datetime.strptime(flarum_dt, r'%Y-%m-%dT%H:%M:%S%z') # type: datetime

        return strpped


def datetime_to_flarum(dt: Optional[Union[datetime, str]]=None):
    """
        Converts Python's datetime object to Flarum's datetime string.
        Doesn't convert if the parameter is already a string.
        
        Flarum's datetime format is `%Y-%m-%dT%H:%M:%S%z`
    """

    if not dt:
        return None

    elif isinstance(dt, str):
        return dt

    else:
        strfed = dt.strftime(r'%Y-%m-%dT%H:%M:%S%z') # type: str

        return strfed