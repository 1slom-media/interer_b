const GETCLIENT = `
    select
        c.*
    from client as c
    where case when $1 > 0 then c.client_id = $1 else true end
    order by c.client_id
`;

const POSTCLIENT =`
insert into
    client(client_text_uz,client_text_en,client_text_ru,client_video)
values
($1,$2,$3,$4) returning *
`;

const PUTCLIENT = `
    with old_client as (
        select
            client_id,
            client_text_uz,
            client_text_en,
            client_text_ru,
            client_video
        from client
        where client_id = $1    
    ) update client as c
        set
        client_text_uz = 
                case 
                    when length($2) > 1 then $2
                    else o.client_text_uz
                end,
        client_text_en = 
                case 
                    when length($3) > 1 then $3
                    else o.client_text_en
                end,
        client_text_ru = 
                case 
                    when length($4) > 1 then $4
                    else o.client_text_ru
                end,
        client_video = 
                case 
                    when length($5) > 1 then $5
                    else o.client_video
                end
    from old_client as o   
    where c.client_id = $1
    returning c.*                 
`;


const DELETECLIENT = `
delete from client
where client_id=$1 returning *
`;

export{
    GETCLIENT,
    POSTCLIENT,
    PUTCLIENT,
    DELETECLIENT
}