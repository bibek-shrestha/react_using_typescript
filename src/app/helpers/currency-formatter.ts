const currencyFormatter = Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0
});

export default currencyFormatter;
