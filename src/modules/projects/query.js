const GETPROJECTS = `
    select
        p.*
    from projects as p
    where case when $1 > 0 then p.project_id = $1 else true end
    order by p.project_id
`;

const POSTPROJECTS =`
insert into
    projects(
        project_img,project_title_uz,project_title_en,project_title_ru,project_description_uz,project_description_en,project_description_ru,category_id
    )
values
    ($1,$2,$3,$4,$5,$6,$7,$8) returning *
`;

const PUTPROJECTS= `
    with old_projects as (
        select
            project_id,
            project_img,
            project_title_uz,
            project_title_en,
            project_title_ru,
            project_description_uz,
            project_description_en,
            project_description_ru,
            category_id
        from projects
        where project_id = $1    
    ) update projects as p
        set
        project_img = 
                case 
                    when length($2) > 1 then $2
                    else o.project_img
                end,
        project_title_uz = 
                case 
                    when length($3) > 1 then $3
                    else o.project_title_uz
                end,
        project_title_en = 
                case 
                    when length($4) > 1 then $4
                    else o.project_title_en
                end,
        project_title_ru = 
                case 
                    when length($5) > 1 then $5
                    else o.project_title_ru
                end,
        project_description_uz = 
                case 
                    when length($6) > 1 then $6
                    else o.project_description_uz
                end,
        project_description_en = 
                case 
                    when length($7) > 1 then $7
                    else o.project_description_en
                end,
        project_description_ru = 
                case 
                    when length($8) > 1 then $8
                    else o.project_description_ru
                end
        category_id = 
                case 
                    when $9 > 0 then $9
                    else o.category_id
                end,
    from old_projects as o   
    where p.project_id = $1
    returning p.*                 
`;


const DELETEPROJECTS = `
delete from projects
where project_id=$1 returning *
`;

export{
    GETPROJECTS,
    POSTPROJECTS,
    PUTPROJECTS,
    DELETEPROJECTS
}