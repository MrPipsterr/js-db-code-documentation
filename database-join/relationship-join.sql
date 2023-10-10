USE classicmodels

-- Buatlah sebuah SQL query menggunakan INNER JOIN untuk mendapatkan daftar pelanggan 
-- beserta detail pesanan yang telah mereka buat. Tampilkan kolom-kolom berikut:
-- 	a.	customerNumber dari tabel customers.
-- 	b.	customerName dari tabel customers.
-- 	c.	productCode dari tabel orderdetails.
-- 	d.	quantityOrdered dari tabel orderdetails.

SELECT c.customerNumber, c.customerName, od.productCode, od.quantityOrdered
FROM customers AS c
JOIN orders AS o 
ON c.customerNumber = o.customerNumber
JOIN orderdetails AS od
ON o.orderNumber = od.orderNumber;



-- Buatlah sebuah SQL query menggunakan OUTER JOIN untuk mendapatkan daftar semua pelanggan dari negara jerman
-- beserta pesananannya, termasuk informasi pesanan seperti tanggal pesanan dan status pengiriman. 
-- Tampilkan kolom-kolom berikut:
-- 	a.	customerName dari tabel customers.
-- 	b. country dari tabel costumers.
-- 	b.	productName dari tabel products.
-- 	c.	orderDate dari tabel orders.
-- 	d.	status dari tabel orders.

SELECT c.customerName, c.country, p.productName, o.orderDate, o.`status`
FROM customers AS c
LEFT JOIN orders AS o USING (customerNumber)
LEFT JOIN orderdetails USING (orderNumber)
LEFT JOIN products AS p USING (productCode)

WHERE c.country = 'germany'