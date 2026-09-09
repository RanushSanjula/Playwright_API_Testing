import { test, expect } from '@playwright/test';

test('POST Request', async ({ request }) => {

    const response = await request.post('https://reqres.in/api/users', {

        data: {
            "name": "Lewis",
            "job": "Driver"
        }
    })

    expect(response.status()).toBe(201);
    const text = await response.text();
    expect(text).toContain('Lewis');
    console.log(await response.json());


})


test('GET Request', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users?page=2');
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Michael');
    console.log(await response.json());

})


test('PUT Request', async ({ request }) => {

    const response = await request.put('https://reqres.in/api/users/2', {

        data: {
            "name": "Max",
            "job": "Driver"
        }
    })

    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Max');
    console.log(await response.json());


})


test('PATCH Request', async ({ request }) => {

    const response = await request.patch('https://reqres.in/api/users/2', {

        data: {
            "job": "Doctor"
        }
    })

    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Doctor');
    console.log(await response.json());

})


test('DELETE Request', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2');

    expect(response.status()).toBe(204);
})