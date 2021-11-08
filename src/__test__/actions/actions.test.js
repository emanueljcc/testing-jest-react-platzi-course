import actions from '../../actions';
import ProductMock from '../../__mocks__/ProductMock';

describe('Actions', () => {
  const payload = ProductMock;
  const expected = {
    payload,
  };
  test('addToCart Action', () => {
    expected.type = 'ADD_TO_CART';
    expect(actions.addToCart(payload)).toEqual(expected);
  });

  test('removeFromCart Action', () => {
    expected.type = 'REMOVE_FROM_CART';
    expect(actions.removeFromCart(payload)).toEqual(expected);
  });
});
