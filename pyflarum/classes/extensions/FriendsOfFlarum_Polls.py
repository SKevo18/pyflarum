from datetime import datetime
from pyflarum.exceptions import FlarumError

from typing import Iterable, Union

from pyflarum.functions import datetime_to_flarum, flarum_to_datetime


class FoF_PollOption(dict):
    def __init__(self, *args):
        dict.__init__(self, *args)


    # Main:
    @property
    def type(self) -> str:
        try:
            return self['type']
        except KeyError:
            return None

    @property
    def id(self) -> int:
        try:
            return self['id']
        except KeyError:
            return None

    # Attributes
    @property
    def attributes(self) -> dict:
        try:
            return self['attributes']
        except KeyError:
            return None

    @property
    def answer(self) -> dict:
        try:
            return self['attributes']['answer']
        except KeyError:
            return None

    @property
    def createdAt(self) -> datetime:
        try:
            return flarum_to_datetime(self['attributes']['createdAt'])
        except KeyError:
            return None

    @property
    def updatedAt(self) -> datetime:
        try:
            return flarum_to_datetime(self['attributes']['updatedAt'])
        except KeyError:
            return None


class FoF_Poll(dict):
    """
        A subclass of `dict` representing poll's JSON data.

        - `question (str)`: The poll's question (example: `"Do you like ducks?"`)
        - `options (list)`: A list containing all options for a poll (example: `["Yes", "No"]`).
        - `endDate (datetime)`: The date when the poll ends and no more votes can be cast.
        - `public (bool)`: Whether or not the poll is a public one (eg.: people can view who voted, defaults to `False`).
        # 
        - `raw_data (dict)`: The raw poll data, used when fetching the poll from an API. Either specify all the options above
        that will build the poll data for you, or just this one with already built poll data.
    """

    def __init__(self, question: str=None, options: list=None, endDate: datetime=None, public: bool=False, raw_data: dict=None):
        """
            Builds the poll data.

            - `question (str)`: The poll's question (example: `"Do you like ducks?"`)
            - `options (list)`: A list containing all options for a poll (example: `["Yes", "No"]`).
            - `endDate (datetime)`: The date when the poll ends and no more votes can be cast.
            - `public (bool)`: Whether or not the poll is a public one (eg.: people can view who voted, defaults to `False`).
            # 
            - `raw_data (dict)`: The raw poll data, used when fetching the poll from an API. Either specify all the options above
            that will build the poll data for you, or just this one with already built poll data.
        """
        
        if raw_data is None:
            if question is None or options is None or type(options) != list:
                raise FlarumError('A question and at least 1 option is required for polls. Options must also be a list')

            poll_data = {
                "question": question,
                "publicFoF_Poll": public,
                "relationships": {
                    "options": options
                }
            }

            if endDate is not None:
                poll_data['endDate'] = datetime_to_flarum(endDate)

            dict.__init__(self, poll_data)

        else:
            dict.__init__(self, raw_data)


    # Main:
    @property
    def type(self) -> str:
        try:
            return self['type']
        except KeyError:
            return None

    @property
    def id(self) -> int:
        try:
            return self['id']
        except KeyError:
            return None

    # Attributes:
    @property
    def question(self) -> str:
        try:
            return self['attributes']['question']
        except KeyError:
            return None

    @property
    def hasEnded(self) -> bool:
        try:
            return self['attributes']['hasEnded']
        except KeyError:
            return None

    @property
    def public(self) -> str:
        try:
            return self['attributes']['publicFoF_Poll']
        except KeyError:
            return None

    @property
    def endDate(self) -> datetime:
        try:
            return flarum_to_datetime(self['attributes']['endDate'])
        except KeyError:
            return None

    @property
    def createdAt(self) -> datetime:
        try:
            return flarum_to_datetime(self['attributes']['createdAt'])
        except KeyError:
            return None

    @property
    def updatedAt(self) -> datetime:
        try:
            return flarum_to_datetime(self['attributes']['updatedAt'])
        except KeyError:
            return None

    @property
    def relationship_options(self) -> list:
        try:
            return self['relationships']['options']['data']
        except KeyError:
            return None

    @property
    def relationship_votes(self) -> list:
        try:
            return self['relationships']['votes']['data']
        except KeyError:
            return None

    @property
    def _options(self) -> Iterable[FoF_PollOption]:
        try:
            options = []

            for option in self['_options']:
                options.append(FoF_PollOption(option))

            return options
        except KeyError:
            return None

    def get_poll_option_by_id(self, id: Union[str, int]) -> FoF_PollOption:
        poll_option = None

        try:
            for option in self._options:
                if option['id'] == str(id):
                    poll_option = FoF_PollOption(option)

        except KeyError:
            raise

        finally:
            return poll_option
