-- Find the average line_item total price (meaning quantity * price) for each order that were completed in January 2016 month.
SELECT avg(price * quantity) AS average_price FROM line_items 
INNER JOIN orders ON line_items.order_id = orders.id 
WHERE orders.completed_on BETWEEN '01-01-2016' AND '01-31-2016';

-- Select product names, product prices and the lowest price they were sold at during the last 20 months.
SELECT name, products.price, products.sale_price, orders.completed_on FROM products 
INNER JOIN line_items ON products.id = line_items.product_id
INNER JOIN orders ON line_items.order_id = orders.id 
WHERE age(orders.completed_on) <= '1 year 8 mons';

-- Calculate how many items in stock we've ever had for each product (remaining or sold) in the database.
SELECT sum(quantity + products.remaining_quantity) AS total_count, products.name FROM line_items
INNER JOIN products ON line_items.product_id = products.id GROUP BY products.name;

-- Find the average order total price for all the orders in the system.
SELECT avg(avg_total) AS total_avg 
FROM (SELECT avg(price * quantity) AS avg_total FROM line_items GROUP BY order_id) AS average;

-- Select all the products that have been purchased in the last 24 months.
SELECT name, completed_on FROM products 
INNER JOIN line_items ON products.id = line_items.product_id
INNER JOIN orders ON line_items.order_id = orders.id 
WHERE age(completed_on) <= '2 years'
ORDER BY completed_on DESC;

-- Select the top 10 products in terms of last year's gross sales.
SELECT name, sum(line_items.price * line_items.quantity) AS total_price FROM products
INNER JOIN line_items ON products.id = line_items.product_id
INNER JOIN orders ON line_items.order_id = orders.id  
GROUP BY name, line_items.price, line_items.quantity
ORDER BY line_items.price * line_items.quantity DESC LIMIT 10;

-- Select all the products that weren't purchased during the last 24 months.
SELECT name, completed_on FROM products 
INNER JOIN line_items ON products.id = line_items.product_id 
INNER JOIN orders ON line_items.order_id = orders.id 
WHERE age(orders.completed_on) <= '2 years' ORDER BY completed_on; 