# OSM Bike Ottawa Tagging Guide

## Table of Contents

- [Lanes](#Lanes)
- [Smoothness](#Smoothness)
- [Signs](#Signs)
- [Lane Configuration](#Lane Configuration)
- [Flooding](#Flooding)
- [Parking](#Parking)
- [Plowing](#Plowing)
- [Filtered Permeability and Pinch-Points](#Filtered Permeability and Pinch-Points)
- [Force Dismounts](#Force Dismounts)
- [Intersections and other Road Crossings](#Intersections and other Road Crossings)
- [Other tags for ways not shown](#Other tags for ways not shown)
- [Points of Interest (Nodes)](#Points of Interest (Nodes))

<h2 id="Lanes">Lanes</h2>

| Feature             | Description         | OSM Schema          | Photos              |
|---------------------|---------------------|---------------------|---------------------|
|**Paved Multi-Use Path (MUP)**|Typically 3m wide, may be wider.<br>Intended for mixed bike and foot traffic.<br>|highway=path<br>surface=asphalt|<a href='https://www.mapillary.com/app/?focus=photo&pKey=xvX6Bexu1gEE_H9KlfodLQ'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/xvX6Bexu1gEE_H9KlfodLQ/thumb-1024.jpg'></a>|
|**Twinned Path**|Typically >4.5 m wide.<br>Intended for separated bike and foot traffic<br>|highway=path<br>surface=asphalt<br>segregated=yes|<a href='https://www.mapillary.com/app/?focus=photo&pKey=J5eakBF0yAOttLLsGtnkcg'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/J5eakBF0yAOttLLsGtnkcg/thumb-1024.jpg'></a>|
|**Walkway**|Typically <3m wide. May not have curb cuts.<br>Intended primarily for foot traffic,<br>though bikes are not prohibited<br>||<a href='https://www.mapillary.com/app/?focus=photo&pKey=fMftKPCR90gDvxZ_3q3V5w'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/fMftKPCR90gDvxZ_3q3V5w/thumb-1024.jpg'></a>|
|**Unpaved Multi-Use Path (MUP)**|Typically 3m wide.<br>Intended for mixed bike and foot traffic.<br>Often a stonedust surface, but sometimes dirt.<br>|||
|**One way protected lanes**|Also known as cycletracks.<br>Separated from the roadway, pedestrians not permitted.<br>|highway=cycleway<br>oneway=yes|<a href='https://www.mapillary.com/app/?focus=photo&pKey=GSkPP_J3o-ILEkeoMJMl0A'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/GSkPP_J3o-ILEkeoMJMl0A/thumb-1024.jpg'></a>|
|**Bi-directional protected cycletrack**|Separate way for the cycletrack.<br>|highway=cycleway<br>oneway=no|<a href='https://www.mapillary.com/app/?focus=photo&pKey=1xOyTkegYkMF9SapKrqAnQ'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/1xOyTkegYkMF9SapKrqAnQ/thumb-1024.jpg'></a>|
|**Buffered bike lane**|The bike lane and roadway share a continuous surface,<br>but are separated by treatments that may include;<br>- jersey barriers<br>- planters<br>- flex stakes<br>- double paint line<br>|cycleway=lane<br>buffer=yes|<a href='https://www.mapillary.com/app/?focus=photo&pKey=sCskYIeAaVOrs6pOvUVddQ'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/sCskYIeAaVOrs6pOvUVddQ/thumb-1024.jpg'></a>|
|**Painted bike lane, on a divided road**|A single line of paint delineates the bike lane.<br>Bike symbol may be painted in the lane.<br>The lane is reserved for bikes by posted signage.<br>|cycleway:right=lane|<a href='https://www.mapillary.com/app/?focus=photo&pKey=IbjORAYAgVQk5oUto7WgsQ'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/IbjORAYAgVQk5oUto7WgsQ/thumb-1024.jpg'></a>|
|**Painted bike lane, on an undivided road**|A single line of paint delineates the bike lane.<br>Bike symbol may be painted in the lane.<br>The lane is reserved for bikes by posted signage.<br>|cycleway=lane|<a href='https://www.mapillary.com/app/?focus=photo&pKey=3Me8bNEXV5Tkr3OhsLO6Ow'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/3Me8bNEXV5Tkr3OhsLO6Ow/thumb-1024.jpg'></a>|
|**Shoulder, not signed as a bike lane**|A single line of paint delineates the shoulder.<br>No signage or bike symbols present.<br>Parking on the shoulder is typically permitted.<br>|shoulder:left/right/both<br>shoulder:surface=yes/no|<a href='https://www.mapillary.com/app/?focus=photo&pKey=wYO6exNSPsFQM7nZblFMAQ'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/wYO6exNSPsFQM7nZblFMAQ/thumb-1024.jpg'></a>|
|**Contraflow lane**|On one-way streets,<br>a yellow line allows two-way bike traffic.<br>|cycleway=opposite_lane|<a href='https://www.mapillary.com/app/?focus=photo&pKey=cW35TfHANRe5DWbbxABJlw'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/cW35TfHANRe5DWbbxABJlw/thumb-1024.jpg'></a>|
|**Advisory bike lane**|Dashed lines delineate bike lanes on each side of the street.<br>The remaining roadway is too narrow for two-way motor traffic.<br>Motorists may enter the bike lanes when encountering an oncoming vehicle,<br>but must give priority to cyclists.<br>||<a href='https://www.mapillary.com/app/?focus=photo&pKey=ok7p-w_Ej9nIG-S9eKK8pg'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/ok7p-w_Ej9nIG-S9eKK8pg/thumb-1024.jpg'></a>|
|**Shared bus/bike lane**|Cyclists will often have these lanes to themselves,<br>but sometimes will need to navigate amidst buses.<br>Designated by signage.<br>|cycleway=share_busway|<a href='https://www.mapillary.com/app/?focus=photo&pKey=PqTQqISWgK5QbWg5PRvaQA'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/PqTQqISWgK5QbWg5PRvaQA/thumb-1024.jpg'></a>|
|**Shared sidewalk (signed)**|A standard sidewalk, sharing designated by signage.<br>Surface is often concrete, rather than asphalt.<br>||<a href='https://www.mapillary.com/app/?focus=photo&pKey=ZP4d2yqBwWWlfbixrztDzA'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/ZP4d2yqBwWWlfbixrztDzA/thumb-1024.jpg'></a>|
|**Dooring zone**|Unique in Ottawa.<br>Painted warning that cyclists should avoid riding close to parked vehicles.<br>||<a href='https://www.mapillary.com/app/?focus=photo&pKey=kl9e_LG76Fvzom8PycQHAQ'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/kl9e_LG76Fvzom8PycQHAQ/thumb-1024.jpg'></a>|
|**Super sharrows**|Green backgound for enhanced visibility.<br>Indicates lane position cyclists should use on roads<br>where no cycling infrastructure is present.<br>|sharrows=left/right/both|<a href='https://www.mapillary.com/app/?focus=photo&pKey=Ai2jtWC-HyicF8V_NWbUcA'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/Ai2jtWC-HyicF8V_NWbUcA/thumb-1024.jpg'></a>|
|**Sharrows**|Bike symbol indicates lane position cyclists should<br>use on roads where no cycling infrastructure is present.<br>Require frequent re-painting and may be very faded;<br>it's still of interest to know which roads are intended to have sharrows.<br>|sharrows=left/right/both|<a href='https://www.mapillary.com/app/?focus=photo&pKey=d-l1qlsZsdb1vJWyeIVeDw'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/d-l1qlsZsdb1vJWyeIVeDw/thumb-1024.jpg'></a>|
|**Traffic-calming parking lane**|Resembles a bike lane or paved shoulder,<br>but is typically narrow and includes a curb.<br>Intended to visually narrow the road and calm traffic speeds.<br>Not specifically intended for cycling, but may be functional.<br>Parking is typically permitted.<br>||<a href='https://www.mapillary.com/app/?focus=photo&pKey=AFnTWKXGzqrIFqDCHRUOcg'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/AFnTWKXGzqrIFqDCHRUOcg/thumb-1024.jpg'></a>|
|**Service strip**|Asphalt strip, resembles a cycletrack,<br>but is typically narrow and in poor condition,<br>with no intersection treatments, and may include utility poles.<br>Intended as a low-maintenance surface for snow storage.<br>Also provide width and smoothness tags.<br>|shoulder=service_strip<br>width=*<br>smoothness=*|<a href='https://www.mapillary.com/app/?focus=photo&pKey=s-IPpAUVbDsSPyDYNceg3Q'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/s-IPpAUVbDsSPyDYNceg3Q/thumb-1024.jpg'></a>|
|**Desire line**|Well-worn path in a direct line between popular destinations.<br>Also known as a goat path.<br>|highway=path<br>path=desire|<a href='https://www.mapillary.com/app/?focus=photo&pKey=dmlxBVFdp3OVrLvGr_VNgg'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/dmlxBVFdp3OVrLvGr_VNgg/thumb-1024.jpg'></a>|
|**Singletrack**|Recreational in purpose, may be meandering or direct.<br>Most often maintained by users.<br>Often includes technically challenging sections,<br>but some sections may be appropriate for transportation<br>||<a href='https://www.mapillary.com/app/?focus=photo&pKey=dTX27I-QVA84jNZDhjcMiQ'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/dTX27I-QVA84jNZDhjcMiQ/thumb-1024.jpg'></a>|
|**Track road**|Also known as doubletrack.<br>Typically direct, but surfaces are often too rough for comfortable cycling.<br>Motor vehicles such as ATVs are often permitted,<br>but track roads are typically not used by conventional cars.<br>May not be maintained.<br>||<a href='https://www.mapillary.com/app/?focus=photo&pKey=cmoaqPU1XpZm1TM5U8gfQA'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/cmoaqPU1XpZm1TM5U8gfQA/thumb-1024.jpg'></a>|
|**Boardwalk**|May be recreational in purpose,<br>but some sections are suitable for transportation<br>|highway=path<br>bridge=boardwalk<br>surface=wood|<a href='https://www.mapillary.com/app/?focus=photo&pKey=pnKXylx9EkyyNmtjBHi_0g'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/pnKXylx9EkyyNmtjBHi_0g/thumb-1024.jpg'></a>|

<h2 id="Smoothness">Smoothness</h2>

| Feature             | Description         | OSM Schema          | Photos              |
|---------------------|---------------------|---------------------|---------------------|
|**Smoothness**|Read more on the wiki. Always a subjective call.<br>Here are some more cycling-specific interpretations of the keys.<br>|smoothness=*||
|**Excellent**|Fresh flawless pavement<br>|smoothness=excellent|<a href='https://www.mapillary.com/app/?focus=photo&pKey=76B0fQHwaSjke-HnuGsyAg'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/76B0fQHwaSjke-HnuGsyAg/thumb-1024.jpg'></a>|
|**Good**|Decent on skinny tires, a few cracks and bumps<br>Flawless stone dust<br>|smoothness=good|<a href='https://www.mapillary.com/app/?focus=photo&pKey=FsJWrwjgEQFsuQVthxZpBg'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/FsJWrwjgEQFsuQVthxZpBg/thumb-1024.jpg'></a>|
|**Intermediate**|A bike with sturdy tires and wheels would be preferred by most.<br>- Bumpy but not hazardous pavement.<br>- Stonedust with some minor washouts.<br>- Well-packed featureless dirt.<br>|smoothness=intermediate|<a href='https://www.mapillary.com/app/?focus=photo&pKey=sNcWLsTqRYidaDZyvdWCuw'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/sNcWLsTqRYidaDZyvdWCuw/thumb-1024.jpg'></a>|
|**Bad**|Pavement with jarring bumps, alligatoring, or large cracks.<br>Coarse gravel or stonedust with washouts that require alertness.<br>Dirt trail with small stones or some small roots.<br>|smoothness=bad|<a href='https://www.mapillary.com/app/?focus=photo&pKey=tNEfnLaJW-CjOyoNocKxWA'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/tNEfnLaJW-CjOyoNocKxWA/thumb-1024.jpg'></a>|
|**Very_bad**|A mountain bike, perhaps with front suspension, is a more comfortable choice here.<br>Pavement with hazardous bumps and cracks large enough to swallow skinny wheels.<br>This is the worst pavement condition that Ottawa is willing to just live with.<br>- Stonedust with hazardous washouts.<br>- Rocky surface, such as an ATV trail.<br>- Dirt trail where stones or roots require attention.<br>|smoothness=very_bad|<a href='https://www.mapillary.com/app/?focus=photo&pKey=E2XjzfnUuCTG_v2DQBLkLQ'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/E2XjzfnUuCTG_v2DQBLkLQ/thumb-1024.jpg'></a>|
|**Horrible**|Dangerously broken pavement that should be fixed immediately;<br>this is not a tag that will often apply to paved surfaces.<br>- Trails with large stones or roots that may require dismounting or suspension<br>|smoothness=horrible|<a href='https://www.mapillary.com/app/?focus=photo&pKey=HBJPYj3unJmoxpAQoH9sfA'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/HBJPYj3unJmoxpAQoH9sfA/thumb-1024.jpg'></a>|
|**Very Horrible**|Rough-edged stones, many exposed roots,<br>suitable only for fatbikes or full suspension<br>|smoothness=very_horrible|<a href='https://www.mapillary.com/app/?focus=photo&pKey=HsZQPUukTzivaSw1fiUemA'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/HsZQPUukTzivaSw1fiUemA/thumb-1024.jpg'></a>|
|**Impassible**|Almost nobody would be able to ride this<br>|smoothness=impassible|<a href='https://www.mapillary.com/app/?focus=photo&pKey=N3kAgXz5-4A5G8k3xIxCZQ'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/N3kAgXz5-4A5G8k3xIxCZQ/thumb-1024.jpg'></a>|

<h2 id="Signs">Signs</h2>

| Feature             | Description         | OSM Schema          | Photos              |
|---------------------|---------------------|---------------------|---------------------|
|**Share the road sign**|Useful to tag as an advocacy target<br>|traffic_sign=*||
|**Single file sign**|Useful to tag as an advocacy target<br>|traffic_sign=*|<a href='https://www.mapillary.com/app/?focus=photo&pKey=PWtqLBKAwQl2mMlLj1K6oQ'><img style='min-width:300px;width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/PWtqLBKAwQl2mMlLj1K6oQ/thumb-1024.jpg'></a>|
|**Bike route sign**|May be useful as way-finding if they come with a bike route number,<br>but many are just generic green signs<br>|traffic_sign=*||
|**Walk your Bike**|A permissive sign that indicates you may walk your bike.<br>This sign alone does not make dismounting mandatory.<br>Tagging them will be useful for indicating areas where<br>there is insufficient space to share with pedestrians or<br>where legal road crossing facilities have not been provided.<br>|traffic_sign=*||

<h2 id="Lane Configuration">Lane Configuration</h2>

| Feature             | Description         | OSM Schema          | Photos              |
|---------------------|---------------------|---------------------|---------------------|
|**Two Lanes**|Most residential streets.<br>|lanes=2||
|**Multiple Lanes**|Includes turning lanes<br>|lanes=5||
|**Width**|Most designated MUPs have a width of 3m,<br>though some are wider. Walkways are typically 2m<br>|width=*||
|**Speed limit**|Only show if the speed is posted different than 50.<br>|maxspeed=40||

<h2 id="Flooding">Flooding</h2>

| Feature             | Description         | OSM Schema          | Photos              |
|---------------------|---------------------|---------------------|---------------------|
|**Flood Prone**|Use `flood_prone=yes`<br>If the flooding is a predictable annual event,<br>you may wish to add conditional access restrictions to<br>indicate times of the year when the way should be avoided.<br>|access:conditional=no @ May 1-15||

<h2 id="Parking">Parking</h2>

It's possible to get into deep detail on street parking;
we are mainly concerned with whether it is present,
or saying definitively that it is absent.

| Feature             | Description         | OSM Schema          | Photos              |
|---------------------|---------------------|---------------------|---------------------|
|**Left**|Parking, left side<br>|parking:lane:left=yes||
|**Right**|Parking, right side<br>|parking:lane:right=yes||
|**Both**|Parking, both side<br>|parking:lane=yes||
|**No Parking**|No Parking<br>|parking:lane=no_parking||
|**No Stopping**|No Stopping<br>|parking:lane=no_stopping||

<h2 id="Plowing">Plowing</h2>

| Feature             | Description         | OSM Schema          | Photos              |
|---------------------|---------------------|---------------------|---------------------|
|**Maintained**|If maintained, `seasonal=no`<br>|seasonal=no||
|**Not maintained**|If not plowed, `seasonal=yes` and<br>add a conditional restriction of `access:conditional=no` @ Dec-Mar<br>to indicate the period when the way is typically unavailable<br>|seasonal=yes<br>access:conditional=no||
|**Poorly maintained**|If poorly plowed, add a conditional restriction of `smoothness:conditional=bad` @ Dec-Mar<br>|smoothness:conditional=bad||

<h2 id="Filtered Permeability and Pinch-Points">Filtered Permeability and Pinch-Points</h2>

| Feature                   | OSM Scheme                | Photos     |
|---------------------------|---------------------------|------------|
| Chicane without channel   |   |   |
| Chicane with channel      |   |   |
| P-gate                    | ![node]<br>[barrier]=[cycle_barrier]<br>bicycle=yes<br>motor_vechicle=no | [![image](https://d1cuyjsrcm0gby.cloudfront.net/MNN5neMyOijTJ_WlFlwLmg/thumb-1024.jpg)](https://www.mapillary.com/map/im/MNN5neMyOijTJ_WlFlwLmg)
| Block/Boulder/Planter          |![node]<br>[barrier]=[block] <br> bicycle=yes<br> motor_vechicle=no|[![image](https://d1cuyjsrcm0gby.cloudfront.net/XpU-Zy9vjNcSsDooiZuXVA/thumb-1024.jpg)](https://www.mapillary.com/map/im/XpU-Zy9vjNcSsDooiZuXVA)
| Bollard                   | ![node]<br>[barrier]=[bollard] <br> bicycle=yes<br> motor_vechicle=no|   [![image](https://d1cuyjsrcm0gby.cloudfront.net/4fpzcNTFK8MZNuiRlzlBxw/thumb-1024.jpg)](https://www.mapillary.com/map/im/4fpzcNTFK8MZNuiRlzlBxw)|
| Split-path entrance       |   |   |
<h2 id="Force Dismounts">Force Dismounts</h2>

| Feature                   | OSM Scheme                | Photos     |
|---------------------------|---------------------------|------------|
| Very narrow gate (<90 cm gap) | ![node]<br>[barrier]=[cycle_barrier]<br>bicycle=yes<br>maxwidth=0.5 <br> Access key: [bicycle]=[dismount][dismount]  |[![image](https://d1cuyjsrcm0gby.cloudfront.net/Tp61o9WU2bmonMmhjUyR2w/thumb-1024.jpg)](https://www.mapillary.com/map/im/Tp61o9WU2bmonMmhjUyR2w)
| Swing gate, must be opened and closed |![node]<br> [barrier]=[swing_gate] <br> bicycle=yes <br> Access key: [bicycle]=[dismount][dismount]    |[![image](https://d1cuyjsrcm0gby.cloudfront.net/5IlTYiFdJUkGmn4pmqr4bg/thumb-1024.jpg)](https://www.mapillary.com/map/im/5IlTYiFdJUkGmn4pmqr4bg)
| Stairs with no trough     |![way]<br>highway=[steps]<br>[ramp]=no <br> Access key: [bicycle]=[dismount][dismount]       | [![image](https://d1cuyjsrcm0gby.cloudfront.net/cPNFSreEy8iQ902_BJopyQ/thumb-1024.jpg)](https://www.mapillary.com/map/im/cPNFSreEy8iQ902_BJopyQ)
| Stairs with trough        |![way]<br>highway=[steps]<br>[ramp]=yes <br>ramp:bicycle=yes <br> Access key: [bicycle]=[dismount][dismount]       | [![image](https://d1cuyjsrcm0gby.cloudfront.net/a8BOwiuTq7Xe5mVZ_Bqf1Q/thumb-1024.jpg)](https://www.mapillary.com/map/im/a8BOwiuTq7Xe5mVZ_Bqf1Q)
| Lock crossing        |![way]<br>bridge=yes <br> surface=wood <br> Access key: [bicycle]=[dismount][dismount]       | [![image](https://d1cuyjsrcm0gby.cloudfront.net/4B2MTPSRKj6JUV6H_c0PVg/thumb-1024.jpg)](https://www.mapillary.com/map/im/4B2MTPSRKj6JUV6H_c0PVg)
| Curb cut needed           |![node]<br> Access key: [bicycle]=[dismount][dismount]    |  [![image](https://d1cuyjsrcm0gby.cloudfront.net/0iNKJr-wUKL0HQ_XYdFopw/thumb-1024.jpg)](https://www.mapillary.com/map/im/0iNKJr-wUKL0HQ_XYdFopw)
<h2 id="Intersections and other Road Crossings">Intersections and other Road Crossings</h2>

| Feature                   | OSM Scheme                | Photos     |
|---------------------------|---------------------------|------------|
| <b>All-way stop</b><br>              |
| <b>Two-way stop</b><br>              |
| <b>Pedestrian Crossover</b><br> Also known as PXOs. These are mid-block crossings, designated by a variety of different signage treatments. They are not crosswalks, which are located at intersections. Cyclists may use PXOs, but are required by law to walk their bike.      |
| <b>Yield</b><br>                     |
| <b>Traffic circle, no bypass</b><br> |
| <b>Traffic circle with bypass</b><br>|
| <b>Bicycle box</b><br> Also known as an advanced stop line (ASL). ASL nodes are located before the actual junction node, and are always connected to their junctions by the Way they're on. Refer to the [asl][asl] Wiki for details       | ![node]<br>[cycleway]=[asl]    | [![image](https://d1cuyjsrcm0gby.cloudfront.net/3A1jICZ8dyQ-5e3WAMZoog/thumb-1024.jpg)](https://www.mapillary.com/map/im/3A1jICZ8dyQ-5e3WAMZoog)|
| <b>Jug handle</b><br> These are places for the cyclists to pull off to the right, out of the stream of traffic, and await an opportunity to cross the road.                |![node]<br>| [![image](https://d1cuyjsrcm0gby.cloudfront.net/d_SH6OmRutjlPgR3B5u8_w/thumb-1024.jpg)](https://www.mapillary.com/map/im/d_SH6OmRutjlPgR3B5u8_w)|
| <b>Cyclist-only left turn lane</b><br>|   |
| <b>Cycleway crosses highway</b><br>  |
<h2 id="Other tags for ways not shown">Other tags for ways not shown</h2>

| Feature                                | OSM Scheme                | Photos     |
|----------------------------------------|---------------------------|------------|
|Truck route|![way]<br>[hgv][hgv]=yes|
|Trucks prohibited|![way]<br>[hgv][hgv]=no
|Bridge|![way]<br> bridge=yes |[![image](https://d1cuyjsrcm0gby.cloudfront.net/DM_icM01W41ppwECsD0joQ/thumb-1024.jpg)](https://www.mapillary.com/map/im/DM_icM01W41ppwECsD0joQ)
|Tunnel| ![way]<br>tunnel=yes|[![image](https://d1cuyjsrcm0gby.cloudfront.net/BABIQ-uSmxRTk4bkTbjCQg/thumb-1024.jpg)](https://www.mapillary.com/map/im/BABIQ-uSmxRTk4bkTbjCQg)|
|Lighting| ![way]<br>lit=yes|[![image](https://d1cuyjsrcm0gby.cloudfront.net/O7G6yB8eP6dBTNKg7Kmnww/thumb-1024.jpg)](https://www.mapillary.com/map/im/O7G6yB8eP6dBTNKg7Kmnww)|
|Relation | operator=NCC or City of Ottawa or Ville de Gatineau|
|Official name of feature | name=*<h2 id="Points of Interest (Nodes)">Points of Interest (Nodes)</h2>

- [amenity=bicycle_parking](https://wiki.openstreetmap.org/wiki/Tag:amenity=bicycle_parking) , [capacity=N](https://wiki.openstreetmap.org/wiki/Key:capacity)
- [amenity=drinking_water](https://wiki.openstreetmap.org/wiki/Tag:amenity=drinking_water)
- [amenity=bench](https://wiki.openstreetmap.org/wiki/Tag:amenity=bench)
- [amenity=waste_basket](https://wiki.openstreetmap.org/wiki/Tag:amenity=waste_basket)
- [amenity=bicycle_repair_station](https://wiki.openstreetmap.org/wiki/Tag:amenity=bicycle_repair_station)
- bike share station
- Counter [man_made=monitoring_station](http://wiki.openstreetmap.org/wiki/Key:monitoring:bicycle) <br> [monitoring:bicycle=yes]
