const GETTUBE = `
    select
        y.*
    from youtube as y
    where case when $1 > 0 then y.tube_id = $1 else true end
    order by y.tube_id
`;

const POSTTUBE =`
insert into
    youtube(tube_title_uz,tube_title_en,tube_title_ru,tube_video)
values
($1,$2,$3,$4) returning *
`;

const PUTTUBE = `
    with old_youtube as (
        select
            tube_id,
            tube_title_uz,
            tube_title_en,
            tube_title_ru,
            tube_video
        from youtube
        where tube_id = $1    
    ) update youtube as y
        set
        tube_title_uz = 
                case 
                    when length($2) > 1 then $2
                    else o.tube_title_uz
                end,
        tube_title_en = 
                case 
                    when length($3) > 1 then $3
                    else o.tube_title_en
                end,
        tube_title_ru = 
                case 
                    when length($4) > 1 then $4
                    else o.tube_title_ru
                end,
        tube_video = 
                case 
                    when length($5) > 1 then $5
                    else o.tube_video
                end
    from old_youtube as o   
    where y.tube_id = $1
    returning y.*                 
`;


const DELETETUBE = `
delete from youtube
where tube_id=$1 returning *
`;

export{
    GETTUBE,
    POSTTUBE,
    PUTTUBE,
    DELETETUBE
}