# OSM Bike Ottawa Tagging Guide

## Lanes

| Feature                                                         | OSM Scheme                | Photos     |
|-----------------------------------------------------------------|---------------------------|------------|
| Paved Multi-Use Path (MUP)                                            | [highway][highway]=[path][path] <br> [surface][surface]=[asphalt][asphalt]| [![image](https://d1cuyjsrcm0gby.cloudfront.net/xvX6Bexu1gEE_H9KlfodLQ/thumb-1024.jpg)](https://www.mapillary.com/app/?lat=45.392085481388904&lng=-75.70190062722224&z=17&focus=photo&pKey=xvX6Bexu1gEE_H9KlfodLQ)
| Unpaved Multi-Use Path (MUP)                                            | [highway][highway]=[path][path] <br> [surface][surface]=[fine_gravel][fine_gravel] | [![image](https://d1cuyjsrcm0gby.cloudfront.net/0y0R2Fs6pv3KvTgCEYPabw/thumb-1024.jpg)](https://www.mapillary.com/app/?lat=45.14111679972223&lng=-75.61085714944443&z=17&focus=map&pKey=0y0R2Fs6pv3KvTgCEYPabw)
| One way protected lanes. Each side has its own way.             | [cycletrack][cycletrack]=yes <br> oneway=yes | [![image](https://d1cuyjsrcm0gby.cloudfront.net/GSkPP_J3o-ILEkeoMJMl0A/thumb-1024.jpg)](https://www.mapillary.com/map/im/GSkPP_J3o-ILEkeoMJMl0A)
| Bi-directional protected cycletrack. Separate way for the cycletrack.      | [cycletrack][cycletrack]=yes | [![image](https://d1cuyjsrcm0gby.cloudfront.net/1xOyTkegYkMF9SapKrqAnQ/thumb-1024.jpg)](https://www.mapillary.com/map/im/1xOyTkegYkMF9SapKrqAnQ)
| Buffered bike lane                                   |                     |
| Painted bike lane, on a divided road                             | [cycleway][cycleway]:right=lane  |
| Painted bike lane, on an undivided road                             | [cycleway][cycleway] = lane |
| Shoulder, not signed as a bike lane                             | shoulder:left/right/both <br> shoulder:surface:yes/no <br> [highway][highway]=[path][path]   |
| Contraflow lane                                                 | oneway:bicycle=yes  |
| Sharrows, may be faded or green                                 | sharrows=left/right/both|
| Desire line| [highway][highway]=[path][path] <br> [path][path] = [desire][desire]| 
| Singletrack| | |

## Plowing

If maintained: [seasonal]=no <br> If not plowed: [seasonal]=yes and add a conditional restriction of [access:conditional][access:conditional]=no @ Dec-Mar to indicate the period when the way is typically unavailable <br> If poorly plowed: add a conditional restriction of [smoothness:conditional][smoothness]=bad @ Dec-Mar 

## Flooding

Use [flood_prone]=yes <br> If the flooding is a predictable annual event, you may wish to add conditional access restrictions to indicate times of the year when the way should be avoided; example: [access:conditional][access:conditional]=no @ May 1-15 

## Other Optional Tags
[width][width] Most MUPs are 3m, though some are wider. 
<br> [smoothness][smoothness]. Read more on the wiki. Always a subjective call. Here are some more cycling-specific interpretations of the key: 

| Value          | Description                                | Photos     |
|----------------|--------------------------------------------|------------|
| Excellent      | fresh flawless pavement                    |[![image](https://d1cuyjsrcm0gby.cloudfront.net/zq_u_KYhFzmwH_FU16ODMw/thumb-1024.jpg)](https://www.mapillary.com/map/im/zq_u_KYhFzmwH_FU16ODMw)
| Good           | decent on skinny tires, a few cracks and bumps <br> flawless stone dust    |
| Intermediate   | bumpy but not hazardous pavement <br> stonedust with some washouts <br> well-packed featureless dirt        |
| Bad            | pavement with jarring bumps, alligatoring, or large cracks <br> coarse gravel <br> dirt trail with small stones or some small roots        |
| Very_bad       | pavement with hazardous bumps and large cracks <br> rocky surface, such as an ATV trail <br> dirt trail where stones or roots require attention       |
| Horrible       | dangerously broken pavement <br> trails with large stones or roots that may require dismounting or suspension        |
| Very_horrible  | rough-edged stones, many exposed roots, suitable only for fatbikes or full suspension        |
| Impassible     | almost nobody would be able to ride this       |

## Lane Configuration
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
- truck route: [hgv][hgv]=yes 
- trucks prohibited: [hgv][hgv]=no
- bridge=yes
- tunnel=yes
- lit=yes
- operator=NCC or City of Ottawa or Ville de Gatineau
- name=*

## Points of Interest (Nodes)

- [amenity=bicycle_parking](https://wiki.openstreetmap.org/wiki/Tag:amenity=bicycle_parking) , [capacity=N](https://wiki.openstreetmap.org/wiki/Key:capacity)
- [amenity=drinking_water](https://wiki.openstreetmap.org/wiki/Tag:amenity=drinking_water)
- [amenity=bench](https://wiki.openstreetmap.org/wiki/Tag:amenity=bench)
- [amenity=waste_basket](https://wiki.openstreetmap.org/wiki/Tag:amenity=waste_basket)
- [amenity=bicycle_repair_station](https://wiki.openstreetmap.org/wiki/Tag:amenity=bicycle_repair_station)

## Intersections, Barricades, and Obstacles

| Feature                   | OSM Scheme                | Photos     |
|---------------------------|---------------------------|------------|
| Four-way stop             |
| Two-way stop              |
| Yield                     |
| Cyclist Dismount          |
| Stairs with no trough     |
| Stairs with trough        |
| Cycleway crosses highway  |
| Bicycle box               |
| P-gate 
| Block                     | [barrier][barrier] = [block][block] <br> [access]=permissive <br> [motor_vechicle]=no
| Bollard                   |
| Split-path                |


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
[width]: http://wiki.openstreetmap.org/wiki/Key:width
[desire]: http://wiki.openstreetmap.org/wiki/Tag:path%3Ddesire
[hgv]: http://wiki.openstreetmap.org/wiki/Key:hgv
[barrier]: http://wiki.openstreetmap.org/wiki/Key:barrier
[block]: https://wiki.openstreetmap.org/wiki/Tag%3Abarrier%3Dblock
