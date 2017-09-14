# OSM Bike Ottawa Tagging Guide

## Lanes

| Feature                                                         | OSM Scheme                | Photos     |
|-----------------------------------------------------------------|---------------------------|------------|
| Paved Multi-Use Path (MUP)                                            | [highway][highway]=[path][path] <br> [surface][surface]=[asphalt][asphalt] <br> optionally, set a value for [smoothness][smoothness]| [![image](https://d1cuyjsrcm0gby.cloudfront.net/xvX6Bexu1gEE_H9KlfodLQ/thumb-1024.jpg)](https://www.mapillary.com/app/?lat=45.392085481388904&lng=-75.70190062722224&z=17&focus=photo&pKey=xvX6Bexu1gEE_H9KlfodLQ)
| Unpaved Multi-Use Path (MUP)                                            | [highway][highway]=[path][path] <br> [surface][surface]=[fine_gravel][fine_gravel] | [![image](https://d1cuyjsrcm0gby.cloudfront.net/0y0R2Fs6pv3KvTgCEYPabw/thumb-1024.jpg)](https://www.mapillary.com/app/?lat=45.14111679972223&lng=-75.61085714944443&z=17&focus=map&pKey=0y0R2Fs6pv3KvTgCEYPabw)
| Shoulder, not signed as a bike lane                             | shoulder:left/right/both <br> shoulder:surface:yes/no <br> [highway][highway]=[path][path]   |
| One way protected lanes. Each side has its own way.             | [cycletrack][cycletrack]=yes <br> oneway=yes |
| Bi-directional protected cycletrack. Separate way for the cycletrack.      | [cycletrack][cycletrack]=yes |
| Shoulder, not signed as a bike lane                             | shoulder:left/right/both <br> shoulder:surface:yes/no |
| Sharrows, may be faded or green                                 | sharrows=left/right/both
| Painted bike lane on one side                                   | [cycleway][cycleway]:right=lane |
| Contraflow lane                                                 | oneway:bicycle=yes  |

## Plowing

If maintained: [seasonal]=no <br> If not plowed: [seasonal]=yes and add a conditional restriction of [access:conditional][access:conditional]=no @ Dec-Mar to indicate the period when the way is typically unavailable <br> If poorly plowed: add a conditional restriction of [smoothness:conditional][smoothness]=bad @ Dec-Mar 

## Flooding

Use [flood_prone]=yes <br> If the flooding is a predictable annual event, you may wish to add conditional access restrictions to indicate times of the year when the way should be avoided; example: [access:conditional][access:conditional]=no @ May 1-15 

## Parking

| Feature                    | OSM Scheme                | Photos     |
|----------------------------|---------------------------|------------|
| Parking, left side         | parking:lane:left=yes     |
| Parking, right side        | parking:lane:right=yes    |
| Parking, both sides        | parking:lane=yes          |

## Lane Configuration

| Feature                                | OSM Scheme                | Photos     |
|----------------------------------------|---------------------------|------------|
| Two lanes. Most residential streets. | lanes=2     |
| Multiple lanes. Include turning lanes| lanes=5     |
| Speed limit. Only show if the speed is posted different than 50. | maxspeed=40  |

## Other tags for ways not shown:

- busway=shared
- bridge=yes
- Tunnel=yes
- lit=yes
- operator=NCC or City of Ottawa or Ville de Gatineau
- name=*

## Points of Interset (Nodes)

- amenity=bicycle_parking , capacity=N https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dbicycle_parking
- amenity=drinking_water https://wiki.openstreetmap.org/wiki/Tag:amenity%3Ddrinking_water
- amenity=bench https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dbench
- amenity=waste_basket https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dwaste_basket
- amenity=bicycle_repair_station https://wiki.openstreetmap.org/wiki/Tag:amenity=bicycle_repair_station

## Intersections

| Feature                   | OSM Scheme                | Photos     |
|---------------------------|---------------------------|------------|
| Four-way stop             |
| Two-way stop              |
| Cycleway crosses highway  |
| Bicycle box               |


[cycleway]: http://wiki.openstreetmap.org/wiki/Tag:cycleway
[cycletrack]: http://wiki.openstreetmap.org/wiki/Tag:cycletrack
[highway]: http://wiki.openstreetmap.org/wiki/Tag:highway
[path]: http://wiki.openstreetmap.org/wiki/Tag:highway=path
[surface]: https://wiki.openstreetmap.org/wiki/Key:surface
[fine_gravel]: https://wiki.openstreetmap.org/wiki/tag:surface=fine_gravel
[asphalt]: https://wiki.openstreetmap.org/wiki/tag:surface=asphalt
[smoothness]: https://wiki.openstreetmap.org/wiki/Key:smoothness
[access:conditional]: http://wiki.openstreetmap.org/wiki/Conditional_restrictions
[flood_prone]: http://wiki.openstreetmap.org/wiki/Key:flood_prone
