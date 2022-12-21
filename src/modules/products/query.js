const GETPRODUCTS = `
    select
        p.*
    from products as p
    where case when $1 > 0 then p.product_id = $1 else true end
    order by p.product_id
`;

const POSTPRODUCTS =`
insert into products (category_id,product_img1,product_img2,product_img3,product_img4,product_title_uz,product_title_en,product_title_ru,product_description_uz,product_description_en,product_description_ru,location,metr,still,design,cols,rows)
values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17) returning *
`;


const PUTPRODUCTS = `
    with old_products as (
        select
            product_id,
            category_id,
            product_img1,
            product_img2,
            product_img3,
            product_img4,
            product_title_uz,
            product_title_en,
            product_title_ru,
            product_description_uz,
            product_description_en,
            product_description_ru,
            location,
            metr,
            still,
            design,
            cols,
            rows
        from products
        where product_id = $1    
    ) update products as p
        set
        category_id = 
                case 
                    when $2 > 0 then $2
                    else o.category_id
                end,
        product_img1 = 
                case 
                    when length($3) > 1 then $3
                    else o.product_img1
                end,
                product_img2 = 
                case 
                    when length($4) > 1 then $4
                    else o.product_img2
                end,
                product_img3 = 
                case 
                    when length($5) > 1 then $5
                    else o.product_img3
                end,
                product_img4 = 
                case 
                    when length($6) > 1 then $6
                    else o.product_img4
                end,
                product_title_uz = 
                case 
                    when length($7) > 1 then $7
                    else o.product_title_uz
                end,
                product_title_en = 
                case 
                    when length($8) > 1 then $8
                    else o.product_title_en
                end,
                product_title_ru = 
                case 
                    when length($9) > 1 then $9
                    else o.product_title_ru
                end,
                product_description_uz = 
                case 
                    when length($10) > 1 then $10
                    else o.product_description_uz
                end,
                product_description_en = 
                case 
                    when length($11) > 1 then $12
                    else o.product_description_en
                end,
                product_description_ru = 
                case 
                    when length($12) > 1 then $12
                    else o.product_description_ru
                end,
                location = 
                case 
                    when length($13) > 1 then $13
                    else o.location
                end,
                metr = 
                case 
                    when length($14) > 1 then $14
                    else o.metr
                end,
                still = 
                case 
                    when length($15) > 1 then $15
                    else o.still
                end,
                design = 
                case 
                    when length($16) > 1 then $16
                    else o.design
                end,
                cols = 
                case 
                    when $17 > 1 then $17
                    else o.cols
                end,
                rows = 
                case 
                    when $18 > 1 then $18
                    else o.rows
                end
    from old_products as o   
    where p.product_id = $1
    returning p.*                 
`;

const DELETEPRODUCTS =`
delete from products
where product_id=$1 returning *
`;

export {
    GETPRODUCTS,
    POSTPRODUCTS,
    PUTPRODUCTS,
    DELETEPRODUCTS
}