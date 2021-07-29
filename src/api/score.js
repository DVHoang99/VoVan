module.exports.getAll = async function getAll(req, res) {
  const a = req.params.param;
  const database = req.app.get("database");
  const row = await database("infomation")
    .where("day", "=", a)
    .select("*")
    .catch(() => []);
  const result = [];

  for (let i = 0; i < row.length; i++) {
    const result2 = [row[i].day, row[i].minh, row[i].phuong, row[i].nhung, row[i].hien];
    result.push(result2);
  }

  return res.json(row);
};
module.exports.postItem = async function postItem(req, res, next) {
  // Retrieve database connection, database database <-> knex
  const database = req.app.get("database");
  try {
    const check =
      Number(req.body.minh) +
      Number(req.body.phuong) +
      Number(req.body.nhung) +
      Number(req.body.hien);
    if (check == 0) {
      const result = await database("infomation").returning("*").insert({
        day: req.body.day,
        minh: req.body.minh,
        phuong: req.body.phuong,
        nhung: req.body.nhung,
        hien: req.body.hien,
      });
      return res.status(200).json({
        response: "ok",
      });
    } else {
      return res.status(200).json({
        response: "false",
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports.getTotal = async function getTotal(req, res, next) {
  const database = req.app.get("database");
  const day = req.params.param;
  const total = [];
  const minh = [];
  const phuong = [];
  const nhung = [];
  const hien = [];
  const row = await database("infomation")
    .where("day", "=", day)
    .select("*")
    .catch(() => []);

  for (let i = 0; i < row.length; i++) {
    minh.push(Number(row[i].minh));
    phuong.push(Number(row[i].phuong));
    nhung.push(Number(row[i].nhung));
    hien.push(Number(row[i].hien));
  }
  const sum = minh.reduce(function (a, b) {
    return a + b;
  }, 0);
  const sum1 = phuong.reduce(function (a, b) {
    return a + b;
  }, 0);
  const sum2 = nhung.reduce(function (a, b) {
    return a + b;
  }, 0);
  const sum3 = hien.reduce(function (a, b) {
    return a + b;
  }, 0);

  return res.json({
    minh: sum,
    phuong: sum1,
    nhung: sum2,
    hien: sum3,
  });
};
