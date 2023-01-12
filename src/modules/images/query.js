const GETIMAGES = `
    select
        i.*
    from images as i
    where case when $1 > 0 then i.img_id = $1 else true end
    order by i.img_id
`;

const POSTIMAGES =`
insert into
    images(
        product_id,image
    )
values
    ($1,$2) returning *
`;

const PUTIMAGES= `
    with old_images as (
        select
            img_id,
            product_id,
            image
        from images
        where img_id = $1    
    ) update images as i
        set
        product_id = 
                case 
                    when $2 > 0 then $2
                    else o.product_id
                end,
        image = 
                case 
                    when length($3) > 1 then $3
                    else o.image
                end
    from old_images as o   
    where i.img_id = $1
    returning i.*                 
`;


const DELETEIMAGES= `
delete from images
where img_id=$1 returning *
`;

export{
    GETIMAGES,
    POSTIMAGES,
    PUTIMAGES,
    DELETEIMAGES
}