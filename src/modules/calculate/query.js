const GETCALCULATE = `
    select
        c.*
    from calculate as c
    where case when $1 > 0 then c.calculate_id = $1 else true end
    order by c.calculate_id
`;

const POSTCALCULATE =`
insert into
    calculate(
        calculate_name,phone_number,room_type,house_type,room_area,coment
    )
values
    ($1,$2,$3,$4,$5,$6) returning *
`;

const PUTCALCULATE= `
    with old_calculate as (
        select
        calculate_id,
        calculate_name,
        phone_number,
        room_type,
        house_type,
        room_area,
        coment
        from calculate
        where calculate_id = $1    
    ) update calculate as c
        set
        calculate_name = 
                case 
                    when length($2) > 1 then $2
                    else o.calculate_name
                end,
        phone_number = 
                case 
                    when length($3) > 1 then $3
                    else o.phone_number
                end,
        room_type = 
                case 
                    when length($4) > 1 then $4
                    else o.room_type
                end,
        house_type = 
                case 
                    when length($5) > 1 then $5
                    else o.house_type
                end,
        room_area = 
                case 
                    when length($6) > 1 then $6
                    else o.room_area
                end,
        coment = 
                case 
                    when length($7) > 1 then $7
                    else o.coment
                end
    from old_calculate as o   
    where c.calculate_id = $1
    returning c.*                 
`;


const DELETECALCULATE = `
delete from calculate
where calculate_id=$1 returning *
`;

export{
    GETCALCULATE,
    POSTCALCULATE,
    PUTCALCULATE,
    DELETECALCULATE
}