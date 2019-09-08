import './api/FruitasticApi'

export default {
    get(callback) {
        window.FruitasticApi.get(callback);
    }
}