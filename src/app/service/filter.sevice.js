var FilterService = (function () {
    function FilterService() {
    }
    FilterService.prototype.getFilter = function (typeName, array) {
        var filtered;
        var pristineArr = array;
        if (typeName != null) {
            filtered = pristineArr.filter(function (item) {
                return item.type.toLowerCase().indexOf(typeName.toLowerCase()) > -1;
            });
            pristineArr = filtered;
        }
        return pristineArr;
    };
    return FilterService;
})();
exports.FilterService = FilterService;
//# sourceMappingURL=filter.sevice.js.map