const is_qoddi = process.env.IS_QODDI || false;

const dbConfigQoddi = "mysql://freedb_2350_main..:&svW5VCbNE?gY*q3@sql.freedb.tech:3306/freedb_comp2350-week5-A01296033";

const dbConfigLocal = "mysql://root:kevin02gusgh02@localhost/freedb_COMP2350_A01296033";

if (is_qoddi) {
  var databaseConnectionString = dbConfigQoddi;
} else {
  var databaseConnectionString = dbConfigLocal;
}

module.exports = databaseConnectionString;
