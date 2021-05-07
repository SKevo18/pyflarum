# -*- coding: utf-8 -*-
from datetime import datetime


def flarum_to_datetime(flarum_dt: str) -> datetime:
    """
        Converts Flarum's datetime string to Python's datetime object.
        Doesn't convert if the parameter is already a datetime object.
        
        Flarum's datetime format is `%Y-%m-%dT%H:%M:%S%z`
    """

    if not flarum_dt:
        return None

    elif type(flarum_dt) == datetime:
        return flarum_dt

    else:
        return datetime.strptime(flarum_dt, r'%Y-%m-%dT%H:%M:%S%z')


def datetime_to_flarum(dt: datetime) -> str:
    """
        Converts Python's datetime object to Flarum's datetime string.
        Doesn't convert if the parameter is already a string.
        
        Flarum's datetime format is `%Y-%m-%dT%H:%M:%S%z`
    """

    if not dt:
        return None

    elif type(dt) == str:
        return dt

    else:
        return dt.strftime(r'%Y-%m-%dT%H:%M:%S%z')