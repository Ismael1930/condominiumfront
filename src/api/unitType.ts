import api from "."

export default {

    getUnitTypes() {
        return api.get('Api/UnitType/getUnitTypes')
    },
    getUnitType(id : number) {
        return api.get(`Api/UnitType/getUnitType/${id}`)
    },
    registerUnitType(data) {
        return api.post('Api/UnitType/registerUnitType', data)
    },
    updateUnitType(data) {
        return api.put('Api/UnitType/updateUnitType', data)
    },
    removeUnitType(data) {
        return api.delete('Api/UnitType/removeUnitType', {data})
    },
    
}