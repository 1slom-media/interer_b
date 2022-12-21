const GETCONTACTS = `
    select
        c.*
    from contact as c
    where case when $1 > 0 then c.contact_id = $1 else true end
    order by c.contact_id
`;

const POSTCONTACTS =`
insert into
    contact(
        contact_name,phone_number
    )
values
    ($1,$2) returning *
`;

const PUTCONTACTS= `
    with old_contact as (
        select
            contact_id,
            contact_name,
            phone_number
        from contact
        where contact_id = $1    
    ) update contact as c
        set
        contact_name = 
                case 
                    when length($2) > 1 then $2
                    else o.contact_name
                end,
        phone_number = 
                case 
                    when length($3) > 1 then $3
                    else o.phone_number
                end
    from old_contact as o   
    where c.contact_id = $1
    returning c.*                 
`;


const DELETECONTACTS = `
delete from contact
where contact_id=$1 returning *
`;

export{
    GETCONTACTS,
    POSTCONTACTS,
    PUTCONTACTS,
    DELETECONTACTS
}