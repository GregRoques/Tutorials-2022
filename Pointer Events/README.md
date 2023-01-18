## PointerEvent interface

- The PointerEvent interface extends the MouseEvent interface and has the following properties. (All of the following properties are Read only .)

**pointerId:** A unique identifier for the pointer causing the event.

**width:** The width (magnitude on the X axis), in CSS pixels, of the contact geometry of the pointer.

**height:** the height (magnitude on the Y axis), in CSS pixels, of the contact geometry of the pointer.

**pressure:** the normalized pressure of the pointer input in the range of 0 to 1, where 0 and 1 represent the minimum and maximum pressure the hardware is capable of detecting, respectively.

**tangentialPressure:** The normalized tangential pressure of the pointer input (also known as barrel pressure or cylinder stress) in the range -1 to 1, where 0 is the neutral position of the control.

**tiltX:** The plane angle (in degrees, in the range of -90 to 90) between the Y–Z plane and the plane containing both the pointer (e.g. pen stylus) axis and the Y axis.

**tiltY:** the plane angle (in degrees, in the range of -90 to 90) between the X–Z plane and the plane containing both the pointer (e.g. pen stylus) axis and the X axis.

**twist:** The clockwise rotation of the pointer (e.g. pen stylus) around its major axis in degrees, with a value in the range 0 to 359.

**pointerType:** Indicates the device type that caused the event (mouse, pen, touch, etc.).

**isPrimary:** Indicates if the pointer represents the primary pointer of this pointer type.
