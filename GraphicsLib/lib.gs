posf=function(l)
    x=10
    y=24
    out=""
    while l.len>0
        scale=1
        obj=l[0]
        text=obj.indexes[0]
        vals=obj[text]
        rot=-vals[2]
        torot=""
        toscale=""
        if scale!=1 then toscale="<size="+(scale*100)+"%>"
        torot="<rotate="+(rot)+">"
        tox="<pos="+((vals[0]*x)*scale)+">"
        toy="<voffset="+((-vals[1]*y)*scale)+">"
        if vals[3]==1 then
            num=0
            for let in text
                ang=(rot*(pi/180))
                posx=(cos(ang)*num)*10
                posy=(sin(ang)*num)*10
                out=out+toscale+torot+"<pos="+(((vals[0]*x)*scale)+posx)+"><voffset="+(((-vals[1]*y)*scale)+posy)+">"+let
                num=num+1
            end for
        else
            out=out+toscale+torot+tox+toy+text
        end if
        l.pull
    end while
    return out
end function
