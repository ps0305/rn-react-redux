import { takeLatest, put } from "redux-saga/effects";
import { GET_PRODUCTS } from "../actionTypes/product";
import {
  getProductsSuccess,
  getProductsFailure
} from "../actionCreators/product";

function* getProducts() {
  try {
    const response = yield fetch("http://172.16.33.210:4000/products");
    const products = yield response.json();
    yield put(getProductsSuccess(products));
  } catch (err) {
    yield put(getProductsFailure(err));
  }
}

export function* productsWatcher() {
  yield [takeLatest(GET_PRODUCTS, getProducts)];
}
