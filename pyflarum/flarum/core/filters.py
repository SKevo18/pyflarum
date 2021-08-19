from typing import Literal, Optional


class Filter:
    """
        Represents a Flarum API filter as a `dict`.

        It allows you to filter discussions without having to manually specify URL parameters.
    """

    def __init__(self, order_by: Optional[Literal['commentCount', '-commentCount', 'createdAt', '-createdAt']]=None, query: Optional[str]=None, limit: int=20, page: Optional[int]=None, include: Optional[list[str]]=None, additional_data: Optional[dict]=None):
        self.order_by = order_by
        self.query = query
        self.limit = limit
        self.page = page
        self.include = include
        self.additional_data = additional_data

        self.as_json = self.to_dict


    @property
    def to_dict(self) -> dict:
        """
            Converts the filter to a `dict`, so that
            it can be sent to the API.

            An extension might add additional data during runtime.
        """

        __data = {}

        if self.order_by:
            __data["sort"] = self.order_by

        if self.query:
            __data["filter[q]"] = self.query

        if self.limit:
            __data["page[limit]"] = self.limit

        if self.page:
            __data["page[offset]"] = self.page * self.limit

        if self.include:
            __data["include"] = ','.join(self.include)


        if self.additional_data:
            __data.update(self.additional_data)
        
        return __data
