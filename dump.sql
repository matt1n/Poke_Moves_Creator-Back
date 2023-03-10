PGDMP          ,                 {            moves_creator #   14.6 (Ubuntu 14.6-0ubuntu0.22.04.1) #   14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)     -           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            .           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            /           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            0           1262    16779    moves_creator    DATABASE     b   CREATE DATABASE moves_creator WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE moves_creator;
                postgres    false            <           1247    16860    category    TYPE     U   CREATE TYPE public.category AS ENUM (
    'status',
    'physical',
    'special'
);
    DROP TYPE public.category;
       public          postgres    false            E           1247    16976 	   poketypes    TYPE       CREATE TYPE public.poketypes AS ENUM (
    'NORMAL',
    'FIRE',
    'WATER',
    'GRASS',
    'FLYING',
    'FIGHTING',
    'POISON',
    'ELECTRIC',
    'GROUND',
    'ROCK',
    'PSYCHIC',
    'ICE',
    'BUG',
    'GHOST',
    'STELL',
    'DRAGON',
    'DARK',
    'FAIRY'
);
    DROP TYPE public.poketypes;
       public          postgres    false            9           1247    16823    types    TYPE       CREATE TYPE public.types AS ENUM (
    'Normal',
    'Fire',
    'Water',
    'Grass',
    'Flying',
    'Fighting',
    'Poison',
    'Electric',
    'Ground',
    'Rock',
    'Psychic',
    'Ice',
    'Bug',
    'Ghost',
    'Steel',
    'Dragon',
    'Dark',
    'Fairy'
);
    DROP TYPE public.types;
       public          postgres    false            ?            1259    17181    moves    TABLE     ?  CREATE TABLE public.moves (
    id integer NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    category text NOT NULL,
    power integer,
    accuracy integer NOT NULL,
    type text NOT NULL,
    pp integer NOT NULL,
    trainer_name text NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    CONSTRAINT moves_accuracy_check CHECK (((accuracy >= 0) AND (accuracy <= 100))),
    CONSTRAINT moves_pp_check CHECK (((pp >= 1) AND (pp <= 99)))
);
    DROP TABLE public.moves;
       public         heap    postgres    false            ?            1259    17180    moves_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.moves_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.moves_id_seq;
       public          postgres    false    212            1           0    0    moves_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.moves_id_seq OWNED BY public.moves.id;
          public          postgres    false    211            ?           2604    17198    moves id    DEFAULT     d   ALTER TABLE ONLY public.moves ALTER COLUMN id SET DEFAULT nextval('public.moves_id_seq'::regclass);
 7   ALTER TABLE public.moves ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211    212            *          0    17181    moves 
   TABLE DATA           u   COPY public.moves (id, name, description, category, power, accuracy, type, pp, trainer_name, created_at) FROM stdin;
    public          postgres    false    212   d       2           0    0    moves_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.moves_id_seq', 6, true);
          public          postgres    false    211            ?           2606    17195    moves moves_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.moves
    ADD CONSTRAINT moves_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.moves DROP CONSTRAINT moves_pkey;
       public            postgres    false    212            *   ?  x?͒Kn1???S?&-???? ??HL?M$6EO1c?v5m;'B?#Ý??H?
!???*?U_?*%6?i?v?w	???a?[r?!
????u?#??F???G@8>?ݢ_A?q?qN??1\N돸??uv?????q`&,?B
%????޽|??b?1
-?9??L??7]???5U?U??/?͟????t?4uQ=?????^??4e?VJ?E-v?n0$?x>?????Z?pF?C??<99?????{J"?=??y${?>O???$???`?ZgL]??ۋ͇??ũQ???mٴR???4Ɣ?N<-E???P??????f??
???? ??????1?8D*?5?dV????z?]?????????Mלˢ(~??o     