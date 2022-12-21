const GETPARTNERS = `
    select
        p.*
    from partners as p
    where case when $1 > 0 then p.partners_id = $1 else true end
    order by p.partners_id
`;

const POSTPARTNERS =`
insert into
    partners(partners_img)
values
($1) returning *
`;

const PUTPARTNERS = `
    with old_partners as (
        select
            partners_id,
            partners_img
        from partners
        where partners_id = $1    
    ) update partners as p
        set
        partners_img = 
                case 
                    when length($2) > 1 then $2
                    else o.partners_img
                end
    from old_partners as o   
    where p.partners_id = $1
    returning p.*                 
`;


const DELETEPARTNERS = `
delete from partners
where partners_id=$1 returning *
`;

export{
    GETPARTNERS,
    POSTPARTNERS,
    PUTPARTNERS,
    DELETEPARTNERS
}