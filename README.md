# OSM Bike Ottawa Tagging Guide

## Lanes

| Feature                                                         | OSM Scheme                | Photos     |
|-----------------------------------------------------------------|---------------------------|------------|
| Multi-Use Path (MUP)                                            | highway=path              | ![image](https://d1cuyjsrcm0gby.cloudfront.net/xvX6Bexu1gEE_H9KlfodLQ/thumb-1024.jpg)
| Shoulder, not signed as a bike lane                             | shoulder:left/right/both <br> shoulder:surface:yes/no <br> highway=path   |
| One way protected lanes. Each side has its own way.             | cycletrack=yes <br> oneway=yes |
| Bi-directional protected lanes. Separate way for the lane.      | cycletrack=yes |
| Shoulder, not signed as a bike lane                             | shoulder:left/right/both <br> shoulder:surface:yes/no |
| Sharrows, may be faded or green                                 | sharrows=left/right/both
| Lane on one side                                                | cycleway:right=lane | 
| Contraflow lane                                                 | oneway:bicycle=yes  |

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
- operator=NCC or City of Ottawa
- name=*

## Points of Interset (Nodes)

- amenity=bicycle_parking , capacity=N
- amenity=drinking_fountain
- amenity=bench
- amenity=wastebasket 

## Intersections

| Feature                   | OSM Scheme                | Photos     |
|---------------------------|---------------------------|------------|
| Four-way stop             |
| Two-way stop              |
| Cycleway crosses highway  |
| Bicycle box               |
