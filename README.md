<img src="https://github.com/GetOlympus/olympus-dionysos-field-oembed/blob/master/assets/field-oembed.png" align="left" />

# Dionysos oEmbed Field

[![Olympus Component][olympus-image]][olympus-url]
[![CodeFactor Grade][codefactor-image]][codefactor-url]
[![Packagist Version][packagist-image]][packagist-url]
[![MIT][license-image]][license-blob]

> This component is a part of the **Olympus Dionysos fields** for **WordPress**.

```sh
composer require getolympus/olympus-dionysos-field-oembed
```

---

## Table of contents

[Field initialization](#field-initialization) • [Variables definition](#variables-definition) • [Texts definition](#texts-definition) • [Retrive data](#retrive-data) • [Release history](#release-history) • [Contributing](#contributing)

---

## Field initialization

Use the following lines to add an `oembed field` in your **WordPress** admin pages or custom post type meta fields:

```php
return \GetOlympus\Dionysos\Field\Oembed::build('my_oembed_field_id', [
    'title'       => 'Never gonna give you up!',
    'default'     => [
        'url'    => 'https://www.youtube.com/watch?v=Xxbd5keKhPU',
        'height' => 1000,
        'width'  => 916,
        'html'   => '<iframe title="Popopooooo" width="916" height="515" src="https://www.youtube.com/embed/Xxbd5keKhPU?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    ],
    'description' => 'You\'ve been Rick rolled!',

    /**
     * Texts definition
     * @see the `Texts definition` section below
     */
    't_addblock_label'    => 'Enter URL here.',
    't_removeblock_label' => 'Clear',
]);
```

## Variables definition

| Variable      | Type    | Default value if not set | Accepted values |
| ------------- | ------- | ------------------------ | --------------- |
| `title`       | String  | `'oEmbed'` | *empty* |
| `default`     | Array   | *empty* | *empty* |
| `description` | String  | *empty* | *empty* |

## Texts definition

| Code | Default value | Definition |
| ---- | ------------- | ---------- |
| `t_addblock_label` | Enter URL here | Used as an URL input placeholder |
| `t_removeblock_label` | Clear | Used as a Clear button area title |

## Retrive data

Retrieve your value from Database with a simple `get_option('my_oembed_field_id', [])` (see [WordPress reference][getoption-url]).  
Below, a `json_encode()` example to understand how data are stored in Database:

```json
{
  "url": "https://www.youtube.com/watch?v=Xxbd5keKhPU",
  "height": 1000,
  "width": 916,
  "html": "<iframe title=\"Popopooooo\" width=\"916\" height=\"515\" src=\"https://www.youtube.com/embed/Xxbd5keKhPU?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
}
```

And below, a simple example to show how to iterate on the data array in `PHP`:

```php
// Get embed from Database
$embed = get_option('my_oembed_field_id', []);

// Check if embed is empty and display it
if (!empty($embed)) {
    echo stripcslashes($embed['html']);
}
```

## Release history

| Version | Note |
| :------ | :--- |
| 0.0.4  | Fix JS ready |
| 0.0.3  | Better CSS display |
| 0.0.2  | Fix display and JS integration |

## Contributing

1. Fork it (<https://github.com/GetOlympus/olympus-dionysos-field-oembed/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

---

**Built with ♥ by [Achraf Chouk](https://github.com/crewstyle "Achraf Chouk") ~ (c) since a long time.**

<!-- links & imgs dfn's -->
[olympus-image]: https://img.shields.io/badge/for-Olympus-44cc11.svg?style=flat-square
[olympus-url]: https://github.com/GetOlympus
[codefactor-image]: https://www.codefactor.io/repository/github/GetOlympus/olympus-dionysos-field-oembed/badge?style=flat-square
[codefactor-url]: https://www.codefactor.io/repository/github/getolympus/olympus-dionysos-field-oembed
[getoption-url]: https://developer.wordpress.org/reference/functions/get_option/
[license-blob]: https://github.com/GetOlympus/olympus-dionysos-field-oembed/blob/master/LICENSE
[license-image]: https://img.shields.io/badge/license-MIT_License-blue.svg?style=flat-square
[packagist-image]: https://img.shields.io/packagist/v/getolympus/olympus-dionysos-field-oembed.svg?style=flat-square
[packagist-url]: https://packagist.org/packages/getolympus/olympus-dionysos-field-oembed