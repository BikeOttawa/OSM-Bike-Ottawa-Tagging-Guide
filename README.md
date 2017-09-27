# OSM Bike Ottawa Tagging Guide

## Lanes

| Feature                                                         | OSM Scheme                | Photos     |
|-----------------------------------------------------------------|---------------------------|------------|
| Paved Multi-Use Path (MUP)                                            | [highway][highway]=[path][path] <br> [surface][surface]=[asphalt][asphalt]| [![image](https://d1cuyjsrcm0gby.cloudfront.net/xvX6Bexu1gEE_H9KlfodLQ/thumb-1024.jpg)](https://www.mapillary.com/app/?lat=45.392085481388904&lng=-75.70190062722224&z=17&focus=photo&pKey=xvX6Bexu1gEE_H9KlfodLQ)
| Unpaved Multi-Use Path (MUP)                                            | [highway][highway]=[path][path] <br> [surface][surface]=[fine_gravel][fine_gravel] | [![image](https://d1cuyjsrcm0gby.cloudfront.net/0y0R2Fs6pv3KvTgCEYPabw/thumb-1024.jpg)](https://www.mapillary.com/app/?lat=45.14111679972223&lng=-75.61085714944443&z=17&focus=map&pKey=0y0R2Fs6pv3KvTgCEYPabw)
| One way protected lanes. Each side has its own way.             | [cycletrack][cycletrack]=yes <br> oneway=yes | [![image](https://d1cuyjsrcm0gby.cloudfront.net/GSkPP_J3o-ILEkeoMJMl0A/thumb-1024.jpg)](https://www.mapillary.com/map/im/GSkPP_J3o-ILEkeoMJMl0A)
| Bi-directional protected cycletrack. Separate way for the cycletrack.      | [cycletrack][cycletrack]=yes | [![image](https://d1cuyjsrcm0gby.cloudfront.net/1xOyTkegYkMF9SapKrqAnQ/thumb-1024.jpg)](https://www.mapillary.com/map/im/1xOyTkegYkMF9SapKrqAnQ)
| Buffered bike lane                  |  [cycleway][cycleway] = lane <br> cycleway:[buffer][buffer] = yes | [![image](https://d1cuyjsrcm0gby.cloudfront.net/sCskYIeAaVOrs6pOvUVddQ/thumb-1024.jpg)](https://www.mapillary.com/map/im/sCskYIeAaVOrs6pOvUVddQ)
| Painted bike lane, on a divided road            | [cycleway][cycleway]:right=lane  |[![image](https://d1cuyjsrcm0gby.cloudfront.net/IbjORAYAgVQk5oUto7WgsQ/thumb-1024.jpg)](https://www.mapillary.com/map/im/IbjORAYAgVQk5oUto7WgsQ)
| Painted bike lane, on an undivided road                             | [cycleway][cycleway] = lane |[![image](https://d1cuyjsrcm0gby.cloudfront.net/3Me8bNEXV5Tkr3OhsLO6Ow/thumb-1024.jpg)](https://www.mapillary.com/map/im/3Me8bNEXV5Tkr3OhsLO6Ow)
| Shoulder, not signed as a bike lane                             | shoulder:left/right/both <br> shoulder:surface:yes/no <br> [highway][highway]=[path][path]   |[![image](https://d1cuyjsrcm0gby.cloudfront.net/wYO6exNSPsFQM7nZblFMAQ/thumb-1024.jpg)](https://www.mapillary.com/app/?focus=photo&pKey=wYO6exNSPsFQM7nZblFMAQ&lat=45.270994444444455&lng=-75.79611111111109&z=17)
| Contraflow lane                                                 | oneway:bicycle=yes  |[![image](https://d1cuyjsrcm0gby.cloudfront.net/cW35TfHANRe5DWbbxABJlw/thumb-1024.jpg)](https://www.mapillary.com/map/im/cW35TfHANRe5DWbbxABJlw)
| Advisory bike lane|   |[![image](https://d1cuyjsrcm0gby.cloudfront.net/ok7p-w_Ej9nIG-S9eKK8pg/thumb-1024.jpg)](https://www.mapillary.com/map/im/ok7p-w_Ej9nIG-S9eKK8pg)|
| Shared sidewalk (signed) |    |     |
| Dooring zone|  |[![image](https://d1cuyjsrcm0gby.cloudfront.net/kl9e_LG76Fvzom8PycQHAQ/thumb-1024.jpg)](https://www.mapillary.com/map/im/kl9e_LG76Fvzom8PycQHAQ)
| Super sharrows, (green background)                                 | sharrows=left/right/both|[![image](https://d1cuyjsrcm0gby.cloudfront.net/Ai2jtWC-HyicF8V_NWbUcA/thumb-1024.jpg)](https://www.mapillary.com/map/im/Ai2jtWC-HyicF8V_NWbUcA)|
| Sharrows      | sharrows=left/right/both| [![image](https://d1cuyjsrcm0gby.cloudfront.net/qfoRaEMALTH4_NvctOUd7g/thumb-1024.jpg)](https://www.mapillary.com/map/im/qfoRaEMALTH4_NvctOUd7g)|
| Traffic-calming parking lane|   |[![image](https://d1cuyjsrcm0gby.cloudfront.net/AFnTWKXGzqrIFqDCHRUOcg/thumb-1024.jpg)](https://www.mapillary.com/map/im/AFnTWKXGzqrIFqDCHRUOcg)
| Desire line| [highway][highway]=[path][path] <br> [path][path] = [desire][desire]| [![image](https://d1cuyjsrcm0gby.cloudfront.net/dmlxBVFdp3OVrLvGr_VNgg/thumb-1024.jpg)](https://www.mapillary.com/map/im/dmlxBVFdp3OVrLvGr_VNgg)
| Singletrack| | [![image](https://d1cuyjsrcm0gby.cloudfront.net/dTX27I-QVA84jNZDhjcMiQ/thumb-1024.jpg)](https://www.mapillary.com/map/dTX27I-QVA84jNZDhjcMiQ)|
| Boardwalk| highway=[path]<br>bridge=[boardwalk]<br>[surface]=wood| [![image](https://d1cuyjsrcm0gby.cloudfront.net/pnKXylx9EkyyNmtjBHi_0g/thumb-1024.jpg)](https://www.mapillary.com/map/pnKXylx9EkyyNmtjBHi_0g)|

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
| Intermediate   | bumpy but not hazardous pavement <br> stonedust with some washouts <br> well-packed featureless dirt        | [![image](https://d1cuyjsrcm0gby.cloudfront.net/sNcWLsTqRYidaDZyvdWCuw/thumb-1024.jpg)](https://www.mapillary.com/map/im/sNcWLsTqRYidaDZyvdWCuw)
| Bad            | pavement with jarring bumps, alligatoring, or large cracks <br> coarse gravel <br> dirt trail with small stones or some small roots        | [![image](https://d1cuyjsrcm0gby.cloudfront.net/tNEfnLaJW-CjOyoNocKxWA/thumb-1024.jpg)](https://www.mapillary.com/map/im/tNEfnLaJW-CjOyoNocKxWA)
| Very_bad       | pavement with hazardous bumps and large cracks <br> rocky surface, such as an ATV trail <br> dirt trail where stones or roots require attention       |
| Horrible       | dangerously broken pavement <br> trails with large stones or roots that may require dismounting or suspension        |[![image](https://d1cuyjsrcm0gby.cloudfront.net/HBJPYj3unJmoxpAQoH9sfA/thumb-1024.jpg)](https://www.mapillary.com/map/HBJPYj3unJmoxpAQoH9sfA)
| Very_horrible  | rough-edged stones, many exposed roots, suitable only for fatbikes or full suspension        |
| Impassible     | almost nobody would be able to ride this       |

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
- Counter

## Intersections and other Road Crossings

| Feature                   | OSM Scheme                | Photos     |
|---------------------------|---------------------------|------------|
| Four-way stop             |
| Two-way stop              |
| Yield                     |
| Traffic circle, no bypass |
| Traffic circle with bypass|
| Bicycle box               |
| Jug handle                |     | [![image](https://d1cuyjsrcm0gby.cloudfront.net/d_SH6OmRutjlPgR3B5u8_w/thumb-1024.jpg)](https://www.mapillary.com/map/im/d_SH6OmRutjlPgR3B5u8_w)
| <i>Cyclist Dismount</i> sign     |
| Cycleway crosses highway  |

 ## Filtered Permeability and Pinch-Points

| Feature                   | OSM Scheme                | Photos     |
|---------------------------|---------------------------|------------|
| Chicane without channel   |   |   |
| Chicane with channel      |   |   |
| P-gate                    |   | [![image](https://d1cuyjsrcm0gby.cloudfront.net/MNN5neMyOijTJ_WlFlwLmg/thumb-1024.jpg)](https://www.mapillary.com/map/im/MNN5neMyOijTJ_WlFlwLmg)
| Block or boulder          | [barrier][barrier] = [block][block] <br>  motor_vechicle=no
| Planter|    |[![image](https://d1cuyjsrcm0gby.cloudfront.net/XpU-Zy9vjNcSsDooiZuXVA/thumb-1024.jpg)](https://www.mapillary.com/map/im/XpU-Zy9vjNcSsDooiZuXVA)
| Bollard                   |   |   |
| Split-path entrance       |   |   |

## Forced Dismounts

| Feature                   | OSM Scheme                | Photos     |
|---------------------------|---------------------------|------------|
| Very narrow gate (<90 cm gap) |    |[![image](https://d1cuyjsrcm0gby.cloudfront.net/Tp61o9WU2bmonMmhjUyR2w/thumb-1024.jpg)](https://www.mapillary.com/map/im/Tp61o9WU2bmonMmhjUyR2w)
| Stairs with no trough     |highway=[steps]<br>[ramp]=no       | |
| Stairs with trough        |highway=[steps]<br>[ramp]=yes <br>ramp:bicycle=yes       | [![image](https://d1cuyjsrcm0gby.cloudfront.net/a8BOwiuTq7Xe5mVZ_Bqf1Q/thumb-1024.jpg)](https://www.mapillary.com/map/im/a8BOwiuTq7Xe5mVZ_Bqf1Q)
| Curb cut needed           |       |  

[cycleway]: http://wiki.openstreetmap.org/wiki/Tag:cycleway
[cycletrack]: http://wiki.openstreetmap.org/wiki/Tag:cycletrack
[highway]: http://wiki.openstreetmap.org/wiki/Key:highway
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
[buffer]: http://wiki.openstreetmap.org/wiki/Proposed_features/Buffered_bike_lane
[boardwalk]:http://wiki.openstreetmap.org/wiki/Tag:bridge%3Dboardwalk
[ramp]:http://wiki.openstreetmap.org/wiki/Key:ramp
[steps]:http://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps
