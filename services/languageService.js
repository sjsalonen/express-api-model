module.exports = {

    findFromArrayByProperty(array, prop, key) {
        const result = array.find(language => language[key] === prop);
        return result;
    },

    sortArray(array, params) {
        if (params.sortBy === "id") {
            array.sort(function(a, b) {
                return a.id - b.id;
            });
        }
        if (params.sortBy === "name") {
            array.sort(function(a, b) {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
        }
        if (params.order === "desc") {
            array.reverse();
        }
        return array;
    }
    

}