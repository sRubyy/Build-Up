package com.gemini11.buildupbackend.repository;

import com.gemini11.buildupbackend.model.Account;
import com.gemini11.buildupbackend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    Iterable<Product> findByAccount(Optional<Account> seller);

    List<Product> findByName(String name);

    @Query(value = """
            SELECT p1.size, p1.is_brand_new, MIN(p1.product_id) AS product_id, p1.name, p1.description, p1.price
            FROM product p1
            LEFT JOIN (
                SELECT size, is_brand_new, MIN(price) AS min_price, MIN(created_at) as created_at
                FROM (SELECT * FROM product WHERE purchase_date IS NULL) p0
                GROUP BY size, is_brand_new
            ) p2
            ON p1.size = p2.size AND p1.is_brand_new = p2.is_brand_new AND p1.price = p2.min_price
            WHERE name = :name
            GROUP BY p1.size, p1.is_brand_new
            ORDER BY p1.size, p1.is_brand_new;
            """,
            nativeQuery = true
    )
    List<List<Object>> findSizeWithMinPriceAndIsBrandNew(@Param("name") String name);

    @Query(value = """
            SELECT p1.size, p1.is_brand_new, MIN(p1.product_id) AS product_id, p1.name, p1.description, p1.price
            FROM product p1
            LEFT JOIN (
                SELECT size, is_brand_new, MIN(price) AS min_price, MIN(created_at) as created_at
                FROM (SELECT * FROM product WHERE purchase_date IS NULL) p0
                GROUP BY size, is_brand_new
            ) p2
            ON p1.size = p2.size AND p1.is_brand_new = p2.is_brand_new AND p1.price = p2.min_price
            WHERE name = :name, is_brand_new = :is_brand_new
            GROUP BY p1.size, p1.is_brand_new
            ORDER BY p1.size, p1.is_brand_new;
            """,
            nativeQuery = true
    )
    List<List<Object>> findSizeWithMinPrice(@Param("name") String name, @Param("is_brand_new") Boolean is_brand_new);

    @Query(value = "SELECT name, description, AVG(price) AS average_price FROM product GROUP BY name", nativeQuery = true)
    List<List<Object>> groupByName();

    @Query(value = "SELECT name, description FROM product WHERE name = :name GROUP BY name", nativeQuery = true)
    List<List<Object>> findByNameInNameGroup(@Param("name") String name);
}
