
User.destroy_all
u1 = User.create(:email => "The_Blade_420@homebrew.com")
u2 = User.create(:email => "Badger@badger.com")
u3 = User.create(:email => "Wolf@wolf.com")

Song.destroy_all
s1 = Song.create(:name => "All Along The Watchtower")
s2 = Song.create(:name => "Hit Me Baby One More Time")
s3 = Song.create(:name => "Song for the Dead")

Album.destroy_all
a1 = Album.create(:name => "Are You Experienced?")
a2 = Album.create(:name => "Baby One More Time")
a3 = Album.create(:name => "Songs for the Deaf")

a1.songs << s1
a2.songs << s2
a3.songs << s3

Artist.destroy_all
art1 = Artist.create(:name => "Jimi Hendrix")
art2 = Artist.create(:name => "Britney Spears")
art3 = Artist.create(:name => "Queens of the Stone Age")

art1.songs << s1
art2.songs << s2
art3.songs << s3

Genre.destroy_all
g1 = Genre.create(:name => "Rock")
g2 = Genre.create(:name => "Pop")
g3 = Genre.create(:name => "Desert rock")
g4 = Genre.create(:name => "Pyschedelic Rock")

g1.songs << s1 << s3
g2.songs << s2
g3.songs << s1
g4.songs << s1

Mixtape.destroy_all
m1 = Mixtape.create(:title => "Great music")
m2 = Mixtape.create(:title => "Really great music")

m1.songs << s1 << s1 << s3
m2.songs << s2 << s3

u1.mixtapes << m1
u2.mixtapes << m2
