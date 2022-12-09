export const stripeApi = {
  tax: 0.05,
  createPayment(price: string) {
    return {
      isSuccess: true,
    };
  },
};

export const paypalApi = {
  makePayment(price: number) {
    return {
      hasFailed: false,
    };
  },
};
