const GETTEAMS = `
    select
        t.*
    from teams as t
    where case when $1 > 0 then t.team_id = $1 else true end
    order by t.team_id
`;

const POSTTEAMS =`
insert into
    teams(team_name,team_position,team_img)
values
($1,$2,$3) returning *
`;

const PUTTEAMS= `
    with old_teams as (
        select
            team_id,
            team_name,
            team_position,
            team_img
        from teams
        where team_id= $1    
    ) update teams as t 
        set
        team_name = 
                case 
                    when length($2) > 1 then $2
                    else o.team_name
                end,
        team_position = 
                case 
                    when length($3) > 1 then $3
                    else o.team_position
                end,
        team_img = 
                case 
                    when length($4) > 1 then $4
                    else o.team_img
                end
    from old_teams as o   
    where t.team_id = $1
    returning t.*                 
`;


const DELETETEAMS = `
delete from teams
where team_id=$1 returning *
`;

export{
    GETTEAMS,
    POSTTEAMS,
    PUTTEAMS,
    DELETETEAMS
}