from pyflarum.exceptions import FlarumError


class FlarumTagUserMixin(dict):
    def __init__(self, *args):
        """
            Initializes the data of the mixin.
        """

        dict.__init__(self, *args)


    @property
    def followTagsPageDefault(self) -> int:
        try:
            return self['data']['attributes']['preferences']['followTagsPageDefault']
        except KeyError:
            return None


class FlarumPostDiscussionTagsData(dict):
    def __init__(self, tag_ids: list=None, raw: dict=None):
        """
            Initializes the data of the mixin.
        """

        if raw is None:
            if tag_ids is None or type(tag_ids) != list:
                raise FlarumError("tag_ids parameter must be a list of tag ids.")

            tag_data = { "data": [] }
            for tag_id in tag_ids:
                tag_data['data'].append({ "type": "tags", "id": str(tag_id)})

            dict.__init__(self, tag_data)

        else:
            dict.__init__(self, raw)
