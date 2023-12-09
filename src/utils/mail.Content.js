import "dotenv/config";

const emailContent = (data) => {
  const formatDateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };

  return `
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background-color: #f2f2f2;
        padding: 10px;
        text-align: center;
      }
      .table-container {
        margin-top: 20px;
      }
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
      }
      img {
        max-width: 100%;
        height: auto;
      }
      .total {
        margin-top: 20px;
      }
      .order-time {
        margin-top: 10px;
      }
      .footer {
        margin-top: 20px;
        text-align: center;
      }
    </style>
    <div class="container">
      <div class="header">
        <p>Order Confirmation</p>
        <p>Welcome: ${data.info.fullname}</p>
        <p>Phone: ${data.info.phone}</p>
        <p>Address: ${data.info.address}</p>
      </div>
      <div class="table-container">
        <table>
          <tr>
            <th>Product Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Amount</th>
          </tr>
          ${data.order.carts
            .map(
              (item) => `
            <tr>
              <td>${item.products.name}</td>
              <td><img src="${item.products.photos[0]}" alt="${item.products.name}" width="50" height="50"></td>
              <td>${item.products.price}</td>
              <td>${item.count}</td>
              <td>${item.totalAmount}</td>
            </tr>
          `
            )
            .join("")}
        </table>
      </div>
      <p class="total">Total Payment: ${data.order.total}</p>
      <p class="order-time">Order Time: ${new Date(data.order.timeOder).toLocaleString("en-US", formatDateOptions)}</p>
      <div class="footer">
        <p>Best regards,</p>
        <p>[${process.env.MAIL_FORM_ADDRESS}]</p>
      </div>
    </div>
  `;
};

export default emailContent;
