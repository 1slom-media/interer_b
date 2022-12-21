const GETVAKANCY = `
    select
        v.*
    from vakancy as v
    where case when $1 > 0 then v.vakancy_id = $1 else true end
    order by v.vakancy_id
`;

const POSTVAKANCY =`
insert into
    vakancy(
        vakancy_title_uz,vakancy_title_en,vakancy_title_ru,vakancy_description_uz,vakancy_description_en,vakancy_description_ru
    )
values
    ($1,$2,$3,$4,$5,$6) returning *
`;

const PUTVAKANCY= `
    with old_vakancy as (
        select
        vakancy_id,
        vakancy_title_uz,
        vakancy_title_en,
        vakancy_title_ru,
        vakancy_description_uz,
        vakancy_description_en,
        vakancy_description_ru
        from vakancy
        where vakancy_id = $1    
    ) update vakancy as v
        set
        vakancy_title_uz = 
                case 
                    when length($2) > 1 then $2
                    else o.vakancy_title_uz
                end,
        vakancy_title_en = 
                case 
                    when length($3) > 1 then $3
                    else o.vakancy_title_en
                end,
        vakancy_title_ru = 
                case 
                    when length($4) > 1 then $4
                    else o.vakancy_title_ru
                end,
        vakancy_description_uz = 
                case 
                    when length($5) > 1 then $5
                    else o.vakancy_description_uz
                end,
        vakancy_description_en = 
                case 
                    when length($6) > 1 then $6
                    else o.vakancy_description_en
                end,
        vakancy_description_ru = 
                case 
                    when length($7) > 1 then $7
                    else o.vakancy_description_ru
                end
    from old_vakancy as o   
    where v.vakancy_id = $1
    returning v.*                 
`;


const DELETEVAKANCY = `
delete from vakancy
where vakancy_id=$1 returning *
`;

export{
    GETVAKANCY,
    POSTVAKANCY,
    PUTVAKANCY,
    DELETEVAKANCY
}