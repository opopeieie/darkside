export default class PageConfig {
    constructor() {

    }

    find(data, filters, func) {
        var self = this;

        filters.forEach(function (filter) {

            var filterKeys = Object.keys(filter);
            var dataKeys = Object.keys(data);

            var filterConditions = 0;

            filterKeys.forEach(function (filterKey) {
                var d = data[filterKey];
                var f = filter[filterKey];
                if (d === f) filterConditions++;

            });

            if (filterConditions === filterKeys.length) {
                func(data);
            }

        });

        if (data.values) {
            data.values.forEach(function (value) {
                return self.find(value, filters, func);
            });
        }

    }
}