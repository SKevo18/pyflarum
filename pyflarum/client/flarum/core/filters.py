import typing as t

import warnings



class Filter:
    """
        Represents a Flarum API filter as a `dict`.

        It allows you to filter discussions without having to manually specify URL parameters.
    """

    def __init__(self, order_by: t.Optional['t.Literal["commentCount", "-commentCount", "createdAt", "-createdAt"]']=None, query: t.Optional[str]=None, ids: t.Optional[t.Iterable['str | int']]=None, limit: int=20, page: t.Optional[int]=None, include: t.Optional[t.List[str]]=None, additional_data: t.Optional[dict]=None):
        """
            - `order_by` - gets passed into `?sort=` parameter. Common values are `commentCount`, `createdAt` and their reverse/negated values (prefixed with `-`)
            - `query` - the search query, passed into `?filter[q]=`. This can be a string. Flarum search bar uses this. Gambits such as `author:username` are supported.
            - `ids` - fetches entries with specific ids, passed into `?filter[id]=`. This is a list, that is then converted into comma separated string.
            - `limit` - limit of entires to fetch. Flarum (by default) allows a max. of 50 entries to be fetched at once. Passed into `?page[limit]=`
            - `page` - fetch a specific page of entires. This is actually an offset - which is determined by multiplying `page` with `limit` (see above).
            - `include` - include specific entries. See [included data](https://cwkevo.github.io/pyflarum/docs/#included-data). You will likely never use this.
            - `additional_data` - this is a `dict` (`parameter: value`) of additional search parameters that you might want to use. This can be used to overwrite previous filters.
        """

        if limit > 50:
            warnings.warn(f"Maximum amount of entries fetchable by 1 bulk API request for Flarum is 50 by default, you specified {limit}. This is a Flarum limitation to prevent flooding, and I can't bypass it. Please, lower the value to be 50 or below.")


        self.order_by = order_by
        self.query = query
        self.ids = ids
        self.limit = limit
        self.page = page
        self.include = include
        self.additional_data = additional_data

        self.as_json = self.to_dict


    @property
    def to_dict(self) -> dict:
        """
            Converts the filter to a `dict`, so that
            it can be sent to the API (`requests` module, see ["Passing parameters in URLs"](https://docs.python-requests.org/en/master/user/quickstart/#passing-parameters-in-urls)).

            An extension might add additional filter data after the filter was initialized
            (for example: `absolutely_all` needs to update page number to continuously yield results).
        """

        __data = {}

        if self.order_by:
            __data["sort"] = self.order_by

        if self.query:
            __data["filter[q]"] = self.query
        
        if self.ids:
            __data["filter[id]"] = ','.join(map(str, self.ids))

        if self.limit:
            __data["page[limit]"] = self.limit

        if self.page:
            __data["page[offset]"] = self.page * self.limit

        if self.include:
            __data["include"] = ','.join(self.include)


        if self.additional_data:
            __data.update(self.additional_data)
        
        return __data
