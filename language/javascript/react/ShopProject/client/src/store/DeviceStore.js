const {makeAutoObservable} = require('mobx');

export default class DeviceStore {
    constructor() {
        this._type = []
        this._brands = []
        this._devices = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setType(type) {
        this._type = type    
    }

    setBrands(brand) {
        this._brands = brand
    }

    setDevice(device) {
        this._devices = device
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setselectedBrand(brand) {
        this._selectedBrand = brand
    }

    setLimit(limit) {
        this._limit = limit
    }

    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }

    setPage(page) {
        this._page = page
    }

    get device() {
        return this._devices
    }

    get brands() {
        return this._brands
    }

    get selectedType() {
        this.setPage(1)
        return this._selectedType
    }

    get selectedBrand() {
        this.setPage(1)
        return this._selectedBrand
    }

    get types() {
        return this._type
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }
}