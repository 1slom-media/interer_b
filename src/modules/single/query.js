const GETSINGLE = `
    select
        s.*
    from single as s
    where case when $1 > 0 then s.single_id = $1 else true end
    order by s.single_id
`;

const POSTSINGLE =`
insert into
    single(
        single_img1,single_img2,single_title_uz,single_title_en,single_title_ru,single_description_uz,single_description_en,single_description_ru
    )
values
    ($1,$2,$3,$4,$5,$6,$7,$8) returning *
`;

const PUTSINGLE= `
    with old_single as (
        select
        single_id,
        single_img1,
        single_img2,
        single_title_uz,
        single_title_en,
        single_title_ru,
        single_description_uz,
        single_description_en,
        single_description_ru
        from single
        where single_id = $1    
    ) update single as s
        set
        single_img1 = 
                case 
                    when length($2) > 1 then $2
                    else o.single_img1
                end,
        single_img2 = 
                case 
                    when length($3) > 1 then $3
                    else o.single_img2
                end,
        single_title_uz = 
                case 
                    when length($4) > 1 then $4
                    else o.single_title_uz
                end,
        single_title_en = 
                case 
                    when length($5) > 1 then $5
                    else o.single_title_en
                end,
        single_title_ru = 
                case 
                    when length($6) > 1 then $6
                    else o.single_title_ru
                end,
        single_description_uz = 
                case 
                    when length($7) > 1 then $7
                    else o.single_description_uz
                end,
        single_description_en = 
                case 
                    when length($8) > 1 then $8
                    else o.single_description_en
                end,
        single_description_ru = 
                case 
                    when length($9) > 1 then $9
                    else o.single_description_ru
                end
    from old_single as o   
    where s.single_id = $1
    returning s.*                 
`;


const DELETESINGLE = `
delete from single
where single_id=$1 returning *
`;

export{
    GETSINGLE,
    POSTSINGLE,
    PUTSINGLE,
    DELETESINGLE
}