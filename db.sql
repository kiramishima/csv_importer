create table contacts
(
    id                     bigint unsigned auto_increment
        primary key,
    team_id                int unsigned not null,
    name                   varchar(255) null,
    phone                  varchar(255) not null,
    email                  varchar(255) null,
    sticky_phone_number_id int          null,
    created_at             timestamp    null,
    updated_at             timestamp    null
)
    collate = utf8mb4_unicode_ci;

create table custom_attributes
(
    id         bigint unsigned auto_increment
        primary key,
    contact_id bigint unsigned not null,
    `key`      varchar(255)    not null,
    value      varchar(255)    not null
)
    collate = utf8mb4_unicode_ci;
